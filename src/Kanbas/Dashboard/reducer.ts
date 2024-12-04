import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EnrollmentState {
  enrolledCourses: string[];
}

const initialState: EnrollmentState = {
  enrolledCourses: JSON.parse(localStorage.getItem("enrolledCourses") || "[]"),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<string>) => {
      state.enrolledCourses.push(action.payload);
      localStorage.setItem("enrolledCourses", JSON.stringify(state.enrolledCourses));
    },
    unenrollCourse: (state, action: PayloadAction<string>) => {
      state.enrolledCourses = state.enrolledCourses.filter(
        (courseId) => courseId !== action.payload
      );
      localStorage.setItem("enrolledCourses", JSON.stringify(state.enrolledCourses));
    },
    toggleEnrollment: (state, action: PayloadAction<string>) => {
      if (state.enrolledCourses.includes(action.payload)) {
        state.enrolledCourses = state.enrolledCourses.filter(
          (courseId) => courseId !== action.payload
        );
      } else {
        state.enrolledCourses.push(action.payload);
      }
      localStorage.setItem("enrolledCourses", JSON.stringify(state.enrolledCourses));
    },
  },
});

export const { enrollCourse, unenrollCourse, toggleEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
