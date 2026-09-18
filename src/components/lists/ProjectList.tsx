import {
  creativePractice,
  selectedWork,
} from "../../data/projects";
import { Card } from "../Card";

export function ProjectList() {
  return (
    <div className="projects">
      <header className="projectsHeader">
        <p className="eyebrow">Work</p>
        <h1>Selected projects</h1>
        <p className="projectsIntro">
          Work across design engineering, frontend development, interaction
          design, accessibility, and creative technology.
        </p>
      </header>

      <section className="projectSection">
        <div className="projectSectionHeader">
          <h2>Selected Work</h2>
          <p>
            Projects that best represent how I approach design, engineering,
            and digital product development.
          </p>
        </div>

        <div className="projectsGrid">
          {selectedWork.map((project) => (
            <Card key={project.slug} {...project} />
          ))}
        </div>
      </section>

      <section className="projectSection">
        <div className="projectSectionHeader">
          <h2>Creative Practice</h2>
          <p>
            Music, sound, and experimental work that informs my wider creative
            practice.
          </p>
        </div>

        <div className="projectsGrid">
          {creativePractice.map((project) => (
            <Card key={project.slug} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
