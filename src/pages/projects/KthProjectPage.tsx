import { Link } from "react-router-dom";

export function KthProjectPage() {
  return (
    <article className="projectPage">
      <Link className="backToProjects" to="/resume">
        <span aria-hidden="true">←</span>
        Back to résumé
      </Link>

      <header className="projectHeader">
        <p className="caseStudyEyebrow">Research & teaching · KTH · 2020–2022</p>
        <h1>KTH</h1>
        <p className="projectSubtitle">
          Research, teaching assistance, and interaction-design work around
          sound, accessibility, data sonification, and interactive media.
        </p>
      </header>

      <section className="projectParagraph">
        <h2>Current public material</h2>
        <div className="projectText">
          <p>
            This page is a lightweight overview for now. The KTH work already
            documented in this portfolio includes my master&apos;s thesis project
            FicSon and the Sonifying Hourglass research prototype.
          </p>

          <div className="caseStudyActions">
            <Link to="/projects/fictitious-soundscapes">
              View FicSon case study →
            </Link>
            <Link to="/projects/sonifying-hourglass">
              View Sonifying Hourglass →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
