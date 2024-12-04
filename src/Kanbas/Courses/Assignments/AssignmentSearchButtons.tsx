import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function AssignmentSearchButtons() {
  return (
    <div className="float-end">
      <button className="btn btn-light btn-sm me-2" title="Assignment Complete">
        <FaCheckCircle style={{ color: "green" }} />
      </button>
      <button className="btn btn-light btn-sm" title="More Options">
        <BsThreeDotsVertical />
      </button>
    </div>
  );
}
