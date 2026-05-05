import { projects } from "../../data/projects";
import { Card } from "../Card";

export function ProjectList() {
  return (
    <section className="projects" id="projects">
      <h2>Selected projects</h2>

      <div className="projectGrid">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}