import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectList() {
  return (
    <section className="projects" id="projects">
      <h2>Selected projects</h2>

      <div className="projectGrid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}