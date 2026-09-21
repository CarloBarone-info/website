import "../../styles/neoviciProjectPage.css";
import { Link } from "react-router-dom";

const cosmozHeroImage =
  "https://cdn.prod.website-files.com/612c779ad9c35386e150549b/6193adb686c1e914d27da4d0_reposition.png";

const cosmozTechnologyImage =
  "https://cdn.prod.website-files.com/612c779ad9c35386e150549b/6131dfe99d3264977d024499_Group%20676.svg";

const cosmozProcessImage =
  "https://cdn.prod.website-files.com/612c779ad9c35386e150549b/6131e02fdfd60672caef326e_Group%20596.svg";

export function NeoviciProjectPage() {
  return (
    <article className="neoviciCaseStudy">
      <Link className="backToProjects" to="/resume">
        <span aria-hidden="true">←</span>
        Back to résumé
      </Link>

      <header className="neoviciHero">
        <div className="neoviciHeroCopy">
          <p className="neoviciEyebrow">Professional work · Neovici · 2023–2026</p>
          <h1>Neovici</h1>
          <p className="neoviciLead">
            Frontend development and UX work on Cosmoz, Neovici&apos;s web-based
            financial automation platform.
          </p>

          <div className="neoviciActions">
            <a
              href="https://www.neovici.se/platform"
              target="_blank"
              rel="noreferrer"
            >
              Explore Cosmoz ↗
            </a>
            <a
              href="https://www.neovici.se/technology"
              target="_blank"
              rel="noreferrer"
            >
              Neovici technology ↗
            </a>
            <a
              href="https://github.com/pionjs/pion"
              target="_blank"
              rel="noreferrer"
            >
              PionJS on GitHub ↗
            </a>
          </div>
        </div>

        <figure className="neoviciHeroMedia">
          <img
            src={cosmozHeroImage}
            alt="Public Cosmoz product illustration from Neovici"
          />
          <figcaption>
            Public Cosmoz product illustration from Neovici&apos;s website.
          </figcaption>
        </figure>
      </header>

      <dl className="neoviciMeta" aria-label="Role overview">
        <div>
          <dt>Role</dt>
          <dd>Frontend Developer & UX Designer</dd>
        </div>
        <div>
          <dt>Product</dt>
          <dd>Cosmoz financial automation platform</dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd>lit-html · Web Components · PionJS · React</dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>UX · frontend · customer-driven product work</dd>
        </div>
      </dl>

      <div className="neoviciBody">
        <aside
          className="neoviciConfidentialityIntro"
          aria-label="Confidentiality note"
        >
          <strong>About this case study</strong>
          <p>
            This page focuses on the parts of my work that I can discuss
            publicly. Some product and customer details are intentionally omitted
            due to confidentiality and NDA obligations.
          </p>
        </aside>

        <section className="neoviciSection">
          <p className="neoviciSectionLabel">01 · The work</p>
          <h2>Working between product needs, UX, and implementation.</h2>
          <div className="neoviciProse">
            <p>
              My role combined frontend development and UX design inside an
              established financial product. A recurring part of the work was
              taking a request or suggestion, understanding the workflow behind
              it, thinking through the interaction, and implementing the result
              in the frontend.
            </p>
            <p>
              Most customer feedback reached me through the project manager, who
              had the broader context around requests and priorities. That meant
              my responsibility was usually not customer discovery itself, but
              translating real product input into interface and implementation
              decisions.
            </p>
          </div>
        </section>

        <section className="neoviciSection">
          <p className="neoviciSectionLabel">02 · Product context</p>

          <div className="neoviciFeatureGrid">
            <figure className="neoviciProcessImage">
              <img
                src={cosmozTechnologyImage}
                alt="Neovici infographic showing the technical layers of the Cosmoz platform"
              />
              <figcaption>
                Neovici&apos;s public overview of the technical layers behind
                Cosmoz.
              </figcaption>
            </figure>

            <div>
              <h2>A mature web product built around financial workflows.</h2>
              <div className="neoviciProse">
                <p>
                  Neovici publicly describes Cosmoz as a platform for automating
                  financial processes such as invoices, payments, approvals,
                  reconciliations, reporting, and related workflows.
                </p>
                <p>
                  The public technology overview describes the interface as a
                  Progressive Web App and the product-development model as
                  continuously iterative, combining technical expertise with user
                  feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="neoviciSection">
          <p className="neoviciSectionLabel">03 · Customer input</p>

          <div className="neoviciSplit">
            <div>
              <h2>Real requests, filtered through real product constraints.</h2>
              <div className="neoviciProse">
                <p>
                  ICA was one of the customer contexts that appeared frequently
                  in the work around me. Neovici publicly documents ICA as a
                  Cosmoz customer and describes its use of the platform in a
                  large supplier-invoice flow.
                </p>
                <p>
                  I joined one direct conversation with ICA&apos;s team. That was
                  the exception rather than the normal workflow: most requests
                  and feedback came to me through the project manager.
                </p>
              </div>
            </div>

            <aside className="neoviciCustomerCard">
              <span>Public customer story</span>
              <strong>ICA × Cosmoz</strong>
              <p>
                Neovici publishes a customer case about ICA&apos;s use of Cosmoz
                in its supplier-invoice process.
              </p>
              <a
                href="https://www.neovici.se/case-ica"
                target="_blank"
                rel="noreferrer"
              >
                Read the ICA case ↗
              </a>
            </aside>
          </div>
        </section>

        <section className="neoviciSection">
          <p className="neoviciSectionLabel">04 · Frontend stack</p>
          <h2>Web Components first, with different tools where they made sense.</h2>

          <div className="neoviciTechList" aria-label="Frontend technologies">
            <span>lit-html</span>
            <span>Web Components</span>
            <span>PionJS</span>
            <span>React</span>
            <span>Polymer</span>
          </div>

          <div className="neoviciSplit neoviciStackSplit">
            <div className="neoviciProse">
              <p>
                Much of my implementation work used lit-html and standard Web
                Components. We also used PionJS, an open-source library that
                brings a React-style Hooks API to Web Components and lit-html.
              </p>
              <p>
                React was introduced in selected parts of the product rather than
                replacing the entire frontend. I worked directly with Iulian
                Meghea and Cristian Necula in this environment, where UX decisions
                and component behaviour were often tightly connected.
              </p>
            </div>

            <aside className="neoviciStackCard">
              <span>PionJS</span>
              <p>
                React-style hooks for standard Web Components, used with
                renderers such as lit-html.
              </p>
              <a
                href="https://github.com/pionjs/pion"
                target="_blank"
                rel="noreferrer"
              >
                View the open-source project ↗
              </a>
            </aside>
          </div>
        </section>

        <section className="neoviciSection">
          <p className="neoviciSectionLabel">05 · Incremental modernisation</p>

          <div className="neoviciFeatureGrid neoviciFeatureGridReverse">
            <div>
              <h2>Modernising the frontend without making the migration the story.</h2>
              <div className="neoviciProse">
                <p>
                  Part of my work involved converting older Polymer-based areas
                  toward newer Lit and Web Component patterns.
                </p>
                <p>
                  The interesting part was the constraint: existing behaviour
                  still had to work while the frontend evolved incrementally.
                  Modernisation happened alongside day-to-day product work, not as
                  a clean-sheet rewrite.
                </p>
              </div>
            </div>

            <figure className="neoviciProcessImage">
              <img
                src={cosmozProcessImage}
                alt="Neovici infographic illustrating its iterative product-development process"
              />
              <figcaption>
                Neovici&apos;s public illustration of its iterative development
                process.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="neoviciSection neoviciLearning">
          <p className="neoviciSectionLabel">06 · What the role strengthened</p>
          <div className="neoviciSplit">
            <h2>Design decisions get more interesting when the constraints are real.</h2>
            <div className="neoviciProse">
              <p>
                Working on a mature product meant balancing user needs,
                established workflows, existing components, technical debt, and
                implementation cost. It reinforced the part of design engineering
                I enjoy most: moving between the problem, the interaction, and
                the code rather than treating them as separate stages.
              </p>
            </div>
          </div>
        </section>

        <footer className="neoviciSources">
          <p className="neoviciSectionLabel">Public references</p>
          <div>
            <a
              href="https://www.neovici.se/platform"
              target="_blank"
              rel="noreferrer"
            >
              Cosmoz platform ↗
            </a>
            <a
              href="https://www.neovici.se/technology"
              target="_blank"
              rel="noreferrer"
            >
              Cosmoz technology ↗
            </a>
            <a
              href="https://www.neovici.se/case-ica"
              target="_blank"
              rel="noreferrer"
            >
              ICA customer case ↗
            </a>
            <a
              href="https://github.com/pionjs/pion"
              target="_blank"
              rel="noreferrer"
            >
              PionJS ↗
            </a>
          </div>

          <aside className="neoviciDisclosure" aria-label="Confidentiality note">
            <strong>Confidentiality note</strong>
            <p>
              Some aspects of this work are covered by confidentiality and NDA
              obligations. Customer-specific workflows, proprietary screenshots,
              internal metrics, implementation details, roadmap information, and
              other non-public material are intentionally omitted.
            </p>
          </aside>
        </footer>
      </div>
    </article>
  );
}
