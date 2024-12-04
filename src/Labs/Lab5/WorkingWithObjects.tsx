import React, { useEffect, useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

interface Module {
  id: string;
  name: string;
  description: string;
  course: string;
}

export default function WorkingWithObjects() {
  // Assignment
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [newScore, setNewScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Module
  const [module, setModule] = useState<Module | null>(null);
  const [newModuleName, setNewModuleName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // API URLs
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  
  useEffect(() => {
    fetch(MODULE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched module data:", data);
        setModule(data);
        setNewModuleName(data.name || "");
        setNewDescription(data.description || "");
      })
      .catch((error) => console.error("Error fetching module data:", error));
  }, []);
  
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* Assignment Related */}
      <h4>Modifying Assignment</h4>

      {/* Update Assignment Title */}
      <div>
        <label htmlFor="assignment-title">Update Assignment Title:</label>
        <input
          id="assignment-title"
          className="form-control w-75"
          defaultValue={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })
          }
        />
        <a
          className="btn btn-secondary mt-2"
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
        >
          Update Title
        </a>
      </div>
      <hr />

      {/* Update Assignment Properties */}
      <div>
        <label htmlFor="assignment-score">Update Assignment Score:</label>
        <input
          id="assignment-score"
          className="form-control mb-2"
          value={newScore}
          onChange={(e) => setNewScore(Number(e.target.value))}
        />
        <a
          className="btn btn-secondary mt-2"
          href={`${ASSIGNMENT_API_URL}/score/${newScore}`}
        >
          Update Score
        </a>
      </div>
      <hr />

      <div className="mt-2">
        <label htmlFor="assignment-status">Update Completion Status:</label>
        <br />
        <input
          type="checkbox"
          id="assignment-status"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
        Completed
        <br />
        <a
          className="btn btn-secondary mt-2"
          href={`${ASSIGNMENT_API_URL}/completed/${isCompleted}`}
        >
          Update Completion Status
        </a>
      </div>  
      <hr />

      {/* Module Related */}
      <h4>Get and Edit Module</h4>

      {/* Get Module */}
      <div>
        <a className="btn btn-info" href={`${MODULE_API_URL}`}>
          Get Module
        </a>
      </div>

      {/* Get Module Name */}
      <div>
        <a className="btn btn-info mt-2" href={`${MODULE_API_URL}/name`}>
          Get Module Name
        </a>
      </div>


      {/* Edit Module */}
      <div className="mt-4">
        <h5>Edit Module</h5>

        <label htmlFor="module-name">Update Module Name:</label>
        <input
          id="module-name"
          className="form-control w-75"
          value={newModuleName || ""}
          onChange={(e) => setNewModuleName(e.target.value)}
        />
        <a
          className="btn btn-success mt-2"
          href={`${MODULE_API_URL}/name/${newModuleName}`}
        >
          Update Module Name
        </a>
      </div>

      <div className="mt-4">
        <label htmlFor="module-description">Update Module Description:</label>
        <input
          id="module-description"
          className="form-control w-75"
          value={newDescription || ""}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <a
          className="btn btn-success mt-2"
          href={`${MODULE_API_URL}/description/${newDescription}`}
        >
          Update Module Description
        </a>
      </div>
      <hr />

    </div>
  );
}
