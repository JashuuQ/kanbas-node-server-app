import { BsThreeDotsVertical } from "react-icons/bs";

export default function AssignmentControlButtons() {
  return (
    <div className="d-flex align-items-center justify-content-end">

      <button className="btn btn-outline-secondary rounded-pill me-2"
              title="Module Progress">
              40% of Total
      </button>

      <button className="btn btn-light btn-sm me-2"
              title="Add Lesson">
              <strong>+</strong>
      </button>

      <button className="btn btn-light btn-sm"
              title="More Options">
        <BsThreeDotsVertical />
      </button>

    </div>
  );
}
