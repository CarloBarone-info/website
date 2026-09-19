import {
  creativePractice,
  selectedWork,
} from "../../data/projects";
import { Card } from "../Card";
import { PageHeader } from "../PageHeader";

export function ProjectList() {
  return (
    <div className="projects">
      <PageHeader
        eyebrow="Portfolio"
        title="Projects & practice"
        intro="A collection of professional, research, and creative work spanning digital products, interaction design, accessibility, sound, and code."
      />

      <section className="projectSection projectSectionDesign">
        <div className="projectSectionHeader">
          <h2>Design &amp; Engineering</h2>
          <p>
            Case studies and builds that show how I frame problems, prototype
            interactions, make technical trade-offs, and turn ideas into
            working digital experiences.
          </p>
        </div>

        <div className="projectsGrid">
          {selectedWork.map((project) => (
            <Card key={project.slug} {...project} />
          ))}
        </div>
      </section>

      <section className="projectSection projectSectionCreative">
        <div className="projectSectionHeader">
          <h2>Creative Practice</h2>
          <p>
            Composition, sound, and experimental work that shapes how I think
            about perception, storytelling, rhythm, and interaction.
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
