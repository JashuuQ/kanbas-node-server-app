import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Account/reducer";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentsReducer from "./Dashboard/reducer";

const store = configureStore({
  reducer: {
    accountReducer,
    modulesReducer,
    assignments: assignmentsReducer,
    enrollments: enrollmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;