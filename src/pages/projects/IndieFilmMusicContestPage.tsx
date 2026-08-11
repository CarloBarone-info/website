import { Header } from "../../components/projectPages/Header";
import { ProjectPage } from "./ProjectPage";

const contents = [
          {
            title: "Overview",
            children: (
              <p>
               The Indie Film Music Contest 2026 is a showcase of original compositions created for independent films, highlighting the creativity and talent of emerging composers in the film industry.
              </p>
            )
          },    
        {
            title: "Entry 1 - Animation",
            children: (
           <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/MGvWJ39T7gQ?si=06BZrrxZZjMuv1fi"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe> )
          },   
        ]

export function IndieFilmMusicContestPage() {
  return (
    <main className="projectPage">
      {ProjectPage(
        <Header
          title="Indie Film Music Contest 2026"
          subtitle="Showcasing original compositions for independent films."
        />,
        contents
      )}
    </main>
  );
}