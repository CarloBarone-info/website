import { Link } from "react-router-dom";

const kthOverviewImage =
  "https://static.wixstatic.com/media/4ad051_b8d06067c0b44ed0901e5c71332e7f1a~mv2.jpg/v1/crop/x_0%2Cy_38%2Cw_960%2Ch_1204/fill/w_369%2Ch_463%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/TekniskaFicSon.jpg";

export function KthProjectPage() {
  return (
    <article className="projectPage kthPage">
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

      <figure className="kthOverviewMedia">
        <img
          src={kthOverviewImage}
          alt="FicSon installation at Tekniska Museet, developed during KTH work"
        />
        <figcaption>
          FicSon at Tekniska Museet — one of the public projects connected to my
          KTH work.
        </figcaption>
      </figure>

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
