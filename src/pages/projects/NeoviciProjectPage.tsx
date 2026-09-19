import "../../styles/neoviciProjectPage.css";
import { Link } from "react-router-dom";

export function NeoviciProjectPage() {
  return (
    <article className="projectPage neoviciPage">
      <Link className="backToProjects" to="/resume">
        <span aria-hidden="true">←</span>
        Back to résumé
      </Link>

      <header className="projectHeader">
        <p className="caseStudyEyebrow">Professional work · 2023–2026</p>
        <h1>Neovici</h1>
        <p className="projectSubtitle">
          Frontend development and UX work on a web-based invoice management
          product.
        </p>
      </header>

      <section className="projectParagraph">
        <h2>Scope</h2>
        <div className="projectText">
          <p>
            My role combined frontend development and UX design, contributing to
            the product&apos;s interface and user experience.
          </p>

          <p className="neoviciDisclosure">
            This case study is intentionally kept high level. Internal product
            details, customer information, and non-public material are not
            included.
          </p>
        </div>
      </section>
    </article>
  );
}
