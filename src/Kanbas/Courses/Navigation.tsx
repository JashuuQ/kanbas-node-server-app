import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {

  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Courses/${cid}/${link}`;
        const isActive = pathname.startsWith(path) ? "active" : "text-danger";

        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item border-0 ${isActive}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
