import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import { RootState } from "../../store";
import { FaTrash } from "react-icons/fa6";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state: RootState) => state.assignments.assignments);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const courseAssignments = assignments.filter(
      (assignment: { course: string | undefined; }) => assignment.course === cid);

  const handleDelete = (assignmentId: any) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };


  return (
    <div className="container">
      <AssignmentsControls />

      {/* Assignments */}
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-3 fs-5 border-gray">
          {/* Title */}
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <strong className="fs-4">ASSIGNMENTS</strong>
            </div>
            <AssignmentControlButtons />
          </div>
          
          {/* Assignment List */}
          <ul className="wd-assignment-details list-group rounded-0">
            {courseAssignments.map((assignment: { _id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; availableFrom: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; dueDate: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; points: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              <li
                key={assignment._id}
                className="wd-detail list-group-item d-flex justify-content-between align-items-center p-3 ps-1"
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-3 fs-3" />        
                  <FaRegFileAlt className="me-4 text-success" />
                  
                  <div>
                    <strong className="fs-4">
                      <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                        {assignment.title}
                      </Link>
                    </strong>

                    <div className="text-muted">
                      <span className="text-danger">Multiple Modules</span> | 
                      <span className="fw-bold"> Not available until</span> {assignment.availableFrom} |
                      <br />
                      <span className="fw-bold">Due</span> {assignment.dueDate} | {assignment.points} pts
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center ms-auto">
                {currentUser.role === "FACULTY" && (
                  <button 
                    className="btn btn-danger btn-sm me-3"
                    onClick={() => handleDelete(assignment._id)}
                    title="Delete Assignment"
                  >
                    <FaTrash />
                  </button>
                )}
                <LessonControlButtons />
              </div>


              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
