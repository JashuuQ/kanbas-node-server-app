import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import * as db from "../../Database";
import { addAssignment, updateAssignment } from "./reducer"; 
import { useDispatch, useSelector } from "react-redux";

export default function AssignmentEditor() {
  const { cid, assignmentID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const currentUser = useSelector((
    state: any) => state.accountReducer.currentUser);  // get current user role
    const canEdit = currentUser?.role === "FACULTY" || currentUser?.role === "TA";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState("");
  const [dueDate, setDueDate] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');
  const [assignmentGroup, setAssignmentGroup] = useState("ASSIGNMENTS1");
  const [submissionType, setSubmissionType] = useState("online");



  useEffect(() => {
    // load assignment data if editing an existing assignment
    if (assignmentID) {
      const assignment = db.assignments.find(a => a._id === assignmentID);
      if (assignment) {
        setTitle(assignment.title);
        setDescription(assignment.description);
        setPoints(assignment.points);
        setDueDate(assignment.dueDate);
        setAvailableFrom(assignment.availableFrom);
        setAvailableUntil(assignment.dueDate);
      }
    }
  }, [assignmentID]);

  const handleSave = () => {
    if (!canEdit) return;  // prevent STUDENT from saving
    
    const newAssignment = {
      _id: assignmentID || new Date().getTime().toString(),
      title,
      description,
      points,
      dueDate,
      availableFrom,
      availableUntil,
      assignmentGroup,
      submissionType,
      course: cid,
    };

    if (assignmentID) {
      dispatch(updateAssignment(newAssignment));
    } else {
      dispatch(addAssignment(newAssignment));
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };


  return (
    <div className="container mt-5">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
        <input 
          type="text" 
          id="assignmentName" 
          className="form-control" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea 
          id="description" 
          className="form-control" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Points */}
      <div className="row mb-3">
        <label htmlFor="points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            id="points"
            className="form-control"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-3">
        <label htmlFor="assignmentGroup" className="col-sm-2 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select
            id="assignmentGroup"
            className="form-select"
            value={assignmentGroup}
            onChange={(e) => setAssignmentGroup(e.target.value)}
          >
            <option value="ASSIGNMENTS1">ASSIGNMENTS1</option>
            <option value="ASSIGNMENTS2">ASSIGNMENTS2</option>
            <option value="ASSIGNMENTS3">ASSIGNMENTS3</option>
          </select>
        </div>
      </div>

      {/* Display Grade */}
      <div className="row mb-3">
        <label htmlFor="displayGrade" className="col-sm-2 col-form-label text-end">
          Display Grade as
        </label>
        <div className="col-sm-10">
          <select id="displayGrade" className="form-select">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="row mb-3">
        <label htmlFor="submissionType" className="col-sm-2 col-form-label text-end">
          Submission Type
        </label>
        <div className="col-sm-10">
          <select
            id="submissionType"
            className="form-select"
            value={submissionType}
            onChange={(e) => setSubmissionType(e.target.value)}
          >
            <option value="online">Online</option>
            <option value="on-paper">On Paper</option>
          </select>

          {/* Online Entry Options */}
          {submissionType === "online" && (
            <div className="mt-3">
              <label className="form-label fs-5">Online Entry Options</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="textEntry" />
                <label className="form-check-label" htmlFor="textEntry">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="websiteUrl" />
                <label className="form-check-label" htmlFor="websiteUrl">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="mediaRecordings" />
                <label className="form-check-label" htmlFor="mediaRecordings">
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="fileUploads" />
                <label className="form-check-label" htmlFor="fileUploads">
                  File Uploads
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Due Date */}
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">Due Date</label>
        <input 
          type="datetime-local" 
          id="dueDate" 
          className="form-control" 
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      {/* Available From */}
      <div className="mb-3">
        <label htmlFor="availableFrom" className="form-label">Available From</label>
        <input 
          type="datetime-local" 
          id="availableFrom" 
          className="form-control" 
          value={availableFrom}
          onChange={(e) => setAvailableFrom(e.target.value)}
        />
      </div>

      {/* Available Until */}
      <div className="mb-3">
        <label htmlFor="availableUntil" className="form-label">Available Until</label>
        <input 
          type="datetime-local" 
          id="availableUntil" 
          className="form-control" 
          value={availableUntil}
          onChange={(e) => setAvailableUntil(e.target.value)}
        />
      </div>

      {/* Save and Cancel Buttons */}
      <div className="d-flex justify-content-end mt-3">
        <button onClick={handleCancel} className="btn btn-secondary me-2">
          {canEdit ? "Cancel" : "Back"}
        </button>
        {canEdit && (
          <button onClick={handleSave} className="btn btn-success">Save</button>
        )}
      </div>
    </div>
  );
}
