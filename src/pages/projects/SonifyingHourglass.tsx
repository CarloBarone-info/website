import { Header } from "../../components/projectPages/Header";
import { ProjectCard } from "../../components/projectPages/ProjectCard";

export function SonifyingHourglass() {
  return (
    <main className="projectPage">
      <Header
        title="The Sonifying Hourglass"
        subtitle="A speculative design project exploring air pollution through sound."
      />

      <ProjectCard title="Overview">
        <p>
          The Sonifying Hourglass explores how environmental data
          can be translated into sound in order to make invisible
          air pollution perceptible in office environments.
        </p>
      </ProjectCard>

      <ProjectCard title="Challenge">
        <p>
          Air quality is difficult to perceive directly. The project
          investigated whether sound could communicate pollution
          levels in a more emotionally immediate way.
        </p>
      </ProjectCard>

      <ProjectCard title="Outcome">
        <p>
          The project resulted in a research paper published at
          SMC 2022 together with an interactive prototype.
        </p>
      </ProjectCard>
    </main>
  );
}