import { BiSearch } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function AssignmentControls() {
  const navigate = useNavigate();
  const { cid } = useParams();  // get current id for the course
  const currentUser = useSelector(
    (state: any) => state.accountReducer.currentUser); // get current user

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };
  
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="position-relative" style={{ width: "300px" }}>

        {/* Search */}
        <input
          type="text"
          placeholder="Search for Assignment"
          className="form-control"
          style={{ paddingLeft: "2rem" }}
        />
        <span
          className="position-absolute"
          style={{
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#999",
          }}
        >
          <BiSearch />
        </span>
      </div>
      
      {/* Add Assignment Button */}
      {currentUser?.role === "FACULTY" && (
        <div className="d-flex">
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments/New`}
            className="btn btn-danger d-flex align-items-center"
          >
            <MdAdd style={{ marginRight: "5px" }} /> Assignment
          </Link>
          <button className="btn btn-outline-secondary ms-2">
            <BsThreeDotsVertical />
          </button>
        </div>
      )}
    </div>
  );
}
