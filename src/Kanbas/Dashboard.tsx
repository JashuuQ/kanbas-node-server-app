import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse, unenrollCourse } from "./Dashboard/reducer";

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // check if user is logged in
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Faculty options for adding/updating courses */}
      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <hr />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <br />
        </>
      )}

      {/* Main Interface */}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course) => (
          <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img
                src={`/images/courses/${course._id}.jpg`}
                alt="Course"
                width="100%"
                height={160}
                onError={(e) => { e.currentTarget.src = "/images/courses/cs0000.jpg"; }}
              />

              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                <p className="wd-dashboard-course-description card-text" style={{ maxHeight: 100 }}>
                  {course.description}
                </p>
              </div>

              <div className="card-footer d-flex justify-content-between align-items-center">
                {/* Go Button */}
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="btn btn-primary"
                >
                  Go
                </Link>

                {/* Faculty-only course management buttons */}
                {currentUser.role === "FACULTY" && (
                  <div className="d-flex gap-2">
                    {/* Edit Button */}
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning"
                      id="wd-edit-course-click"
                    >
                      Edit
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </button>
                  </div>
                )}

                {/* Student-only enrollment buttons */}
                {currentUser.role === "STUDENT" && (
                  <div className="d-flex gap-2">
                    <button
                      className={`btn ${course.enrolled ? "btn-danger" : "btn-success"}`}
                      onClick={(event) => {
                        event.preventDefault();
                        if (course.enrolled) {
                          dispatch(unenrollCourse(course._id));
                        } else {
                          dispatch(enrollCourse(course._id));
                        }
                      }}
                    >
                      {course.enrolled ? "Unenroll" : "Enroll"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
