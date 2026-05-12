 import { Header } from "../components/projectPages/Header";
import { ProjectCard } from "../components/projectPages/ProjectCard";

export function ProjectPage() {
  return (
    <main className="projectPage">
      <Header
        title="The Sonifying Hourglass"
        subtitle="An exploration of air pollution through sound design."
      />

      <ProjectCard title="Overview">
        <p>
          The Sonifying Hourglass is a speculative design project
          investigating how sound can communicate invisible
          environmental conditions in office spaces.
        </p>
      </ProjectCard>

      <ProjectCard title="Process">
        <p>
          The project combined UX research, interaction design,
          and sound prototyping to explore how users emotionally
          respond to sonified air quality data.
        </p>
      </ProjectCard>

      <ProjectCard title="Outcome">
        <p>
          The project resulted in a publication at SMC 2022 and
          an interactive prototype installation.
        </p>
      </ProjectCard>
    </main>
  );
}