import { creativePractice, engineeringWork, selectedWork } from "../../data/projects";
import { ProjectCollection } from "../ProjectCollection";
import { PageHeader } from "../PageHeader";

export function ProjectList() {
  return (
    <div className="projects">
      <PageHeader
        eyebrow="Portfolio"
        title="Projects & practice"
        intro="Professional product development, research-led interaction design, engineering and creative work."
      />
      <ProjectCollection
        title="Selected design work"
        description="Case studies about real product constraints, inclusive interactions and experimentally evaluated design alternatives."
        items={selectedWork}
      />
      <ProjectCollection
        title="Engineering"
        description="Code, technical experiments and the implementation behind working experiences."
        items={engineeringWork}
        variant="engineering"
      />
      <ProjectCollection
        title="Creative practice"
        description="Composition, sound and experimental work that shape how I think about perception, storytelling and interaction."
        items={creativePractice}
        variant="creative"
      />
    </div>
  );
}
