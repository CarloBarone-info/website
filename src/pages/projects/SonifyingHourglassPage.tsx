import { Header } from "../../components/projectPages/Header";
import { ProjectPage } from "./ProjectPage";

const contents = [
          {
            title: "Overview",
            children: (
              <p>
                The Sonifying Hourglass is a speculative design project investigating how sound can communicate invisible environmental conditions in office
          spaces.
              </p>
            )
          },
          {
            title: "Process",
            children: (
                <p>
          The project combined UX research, interaction design, and sound
          prototyping to explore how users emotionally respond to sonified air
          quality data.
        </p>),
          },
          {
            title: "Outcome",
            children: (
              <p>
                The project resulted in a publication at SMC 2022 and an interactive
                prototype installation.
              </p>
            )
          }
        ]

export function SonifyingHourglassPage() {
  return (
    <main className="projectPage">
      {ProjectPage(
        <Header
          title="The Sonifying Hourglass"
          subtitle="An exploration of air pollution through sound design."
        />,
        contents
      )}
    </main>
  );
}
