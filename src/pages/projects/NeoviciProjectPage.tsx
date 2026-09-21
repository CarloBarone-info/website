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

          <p>
            Most customer feedback reached me through the project manager, who
            had the broader context around requests and priorities. My part was
            usually to understand the workflow behind that input, work through
            the UX implications, and carry the change into the frontend.
          </p>

          <p>
            I also joined a direct conversation with ICA&apos;s team on one
            occasion. ICA is publicly documented by Neovici as a Cosmoz customer,
            but direct customer contact was the exception rather than the normal
            way I received product input.
          </p>

          <p>
            Much of my implementation work used lit-html, Web Components, and
            PionJS, with React introduced in selected areas. I also worked on
            modernising older Polymer-based parts of the product, although that
            was one part of a broader frontend role rather than the main focus.
          </p>

          <p>
            I worked directly with Iulian Meghea and Cristian Necula in this
            frontend environment.
          </p>

          <p className="neoviciDisclosure">
            This case study is intentionally kept high level. Internal product
            details, customer-specific implementation details, proprietary
            screenshots, metrics, and other non-public material are not included.
          </p>
        </div>
      </section>
    </article>
  );
}
