import { Header } from "../../components/projectPages/Header";
import { ProjectPage } from "./ProjectPage";

const contents = [
  {
    title: "Overview",
    children: (
      <p>
        The Indie Film Music Contest 2026 is a showcase of original compositions
        created for independent films, highlighting the creativity and talent of
        emerging composers in the film industry.
      </p>
    ),
  },
  {
    title: "Entry 1 - Animation",
    children: (
      <div className="responsiveVideo">
        <iframe
          src="https://www.youtube.com/embed/MGvWJ39T7gQ?si=06BZrrxZZjMuv1fi"
          title="Indie Film Music Contest animation entry"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    ),
  },
  {
    title: "Entry 2 - Live Action",
    children: (
      <>
        <h4>
          Film extract used with permission from Cameron Perry – A Grade
          Students.
        </h4>
        <div className="responsiveVideo">
          <iframe
            src="https://www.youtube.com/embed/k1xd1L15KUU?si=el0vuKW_gR3nw4Tf"
            title="Indie Film Music Contest live-action entry"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </>
    ),
  },
];

export function IndieFilmMusicContestPage() {
  return (
    <main className="projectPage">
      {ProjectPage(
        <Header
          title="Indie Film Music Contest 2026"
          subtitle="Showcasing original compositions for independent films."
        />,
        contents,
      )}
    </main>
  );
}
