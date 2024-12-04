import { FaPlus } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons(
  { moduleId, deleteModule, editModule }: {
    moduleId: string; deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void;
  } ) {
  
  return (
    <div className="float-end">

      <button className="btn btn-light btn-sm text-primary me-2" title = "Edit Module"
              onClick={() => editModule(moduleId)}>
        <FaPencil />
      </button>
      
      <button className="btn btn-light btn-sm text-danger me-2" title = "Delete Module"
              onClick={() => deleteModule(moduleId)}>
        <FaTrash />
      </button>

      <button className="btn btn-light btn-sm me-2" title="Module Complete">
        <FaCheckCircle style={{ color: "green" }} />
      </button>

      <button className="btn btn-light btn-sm me-2" title="Add Lesson">
        <FaPlus />
      </button>
      
      <button className="btn btn-light btn-sm" title="More Options">
        <BsThreeDotsVertical />
      </button>

    </div>
      
  );
}

