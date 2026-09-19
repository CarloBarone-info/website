import { Link } from "react-router-dom";

export function BackToProjects() {
  return (
    <Link className="backToProjects" to="/projects">
      <span aria-hidden="true">←</span>
      Back to projects
    </Link>
  );
}
