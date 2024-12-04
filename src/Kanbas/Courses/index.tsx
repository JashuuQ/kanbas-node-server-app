import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import Table from "./People/Table"; 

interface CoursesProps {
  courses: any[];
}

export default function Courses({ courses }: CoursesProps) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === String(cid));
  
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          {course && course.name} &gt; {pathname.split("/")[4]}
      </h2> <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>

        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/New" element={<AssignmentEditor />} />
            <Route path="Assignments/:assignmentID" element={<AssignmentEditor />} />
            <Route path="People" element={<Table />} /> 
          </Routes>
        </div>
      </div>
    </div>

);}
