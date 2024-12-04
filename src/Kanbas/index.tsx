import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import "./styles.css";
import { useSelector } from "react-redux";
import { Course } from "./types";

import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course Name",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/courses/cs0000.jpg",
    credits: 4,
    description: "New Description"
  });

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses: Course[] = await userClient.findMyCourses()
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);


  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses,  newCourse ]);
  };

  const deleteCourse = async (courseId: any) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => (c._id === course._id ? course : c))
    );
  };

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="Account/*" element={<Account />} />
            <Route path="Dashboard" element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              </ProtectedRoute>
            } />
            
            <Route path="Courses/:cid/*" element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            } />
            
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
