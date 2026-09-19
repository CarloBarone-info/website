import { BackToProjects } from "../../components/BackToProjects";

const exhibitionImage =
  "https://static.wixstatic.com/media/4ad051_b8d06067c0b44ed0901e5c71332e7f1a~mv2.jpg/v1/crop/x_0%2Cy_38%2Cw_960%2Ch_1204/fill/w_369%2Ch_463%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/TekniskaFicSon.jpg";

export function FicSonPage() {
  return (
    <article className="projectPage ficsonPage">
      <BackToProjects />
      <header className="caseStudyHero">
        <div className="caseStudyHeroCopy">
          <p className="caseStudyEyebrow">Master thesis · KTH · 2022</p>
          <h1>FicSon</h1>
          <p className="caseStudyLead">
            Designing an accessible interface for shaping fictitious futuristic
            urban soundscapes in a museum setting.
          </p>

          <div className="caseStudyActions">
            <a
              href="https://urn.kb.se/resolve?urn=urn:nbn:se:kth:diva-312787"
              target="_blank"
              rel="noreferrer"
            >
              Read the thesis ↗
            </a>
            <a
              href="https://carlobarone.wixsite.com/main-page/fictitious-soundscapes"
              target="_blank"
              rel="noreferrer"
            >
              Original Wix case study ↗
            </a>
          </div>
        </div>

        <figure className="caseStudyHeroMedia">
          <img
            src={exhibitionImage}
            alt="FicSon installation exhibited at Tekniska Museet in Stockholm"
          />
          <figcaption>FicSon at Tekniska Museet, Stockholm.</figcaption>
        </figure>
      </header>

      <dl className="caseStudyMeta" aria-label="Project overview">
        <div>
          <dt>Role</dt>
          <dd>Interface design, programming & experiment</dd>
        </div>
        <div>
          <dt>Context</dt>
          <dd>KTH master thesis · NAVET research project</dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>HCI · Accessibility · Sound design</dd>
        </div>
        <div>
          <dt>Outcome</dt>
          <dd>Interactive museum exhibition</dd>
        </div>
      </dl>

      <div className="caseStudyBody">
        <section className="caseStudySection caseStudyIntroSection">
          <p className="caseStudySectionLabel">01 · The question</p>
          <h2>Who gets to shape the sound of a future city?</h2>
          <div className="caseStudyProse">
            <p>
              FicSon investigated how people with hearing impairments might
              participate in designing future urban soundscapes rather than only
              receiving sound-design decisions made for them.
            </p>
            <p>
              The project connected that broader research question with a very
              practical interaction-design challenge: create an interface that
              museum visitors with a wide range of ages and abilities could
              understand quickly and use without lengthy instructions.
            </p>
          </div>
        </section>

        <section className="caseStudySection">
          <p className="caseStudySectionLabel">02 · My contribution</p>
          <div className="caseStudySplit">
            <h2>Turning sound research into an interaction people could use.</h2>
            <div className="caseStudyProse">
              <p>
                My work focused on the interface design, programming, and
                experimental part of the project. The interface needed to make
                complex sound manipulation approachable while still producing
                useful data for the research.
              </p>
              <p>
                That meant balancing two different needs: a playful museum
                experience that invited exploration, and a controlled
                interaction model that could support evaluation.
              </p>
            </div>
          </div>
        </section>

        <section className="caseStudySection">
          <p className="caseStudySectionLabel">03 · Interaction model</p>
          <h2>Three vehicles. Three circles. As little explanation as possible.</h2>

          <div className="ficsonInteraction">
            <div className="ficsonCircle" aria-hidden="true">
              <span>01</span>
            </div>
            <div className="ficsonCircle" aria-hidden="true">
              <span>02</span>
            </div>
            <div className="ficsonCircle" aria-hidden="true">
              <span>03</span>
            </div>
          </div>

          <div className="caseStudyProse caseStudyProseWide">
            <p>
              Visitors interacted with three coloured circles on a touchscreen,
              each corresponding to one of the futuristic vehicles in the
              projected city scene. Moving within a circle blended between four
              sound-design families and altered effects such as filtering and
              reverberation.
            </p>
            <p>
              A physical laser-cut overlay exposed only the three interaction
              areas and the two controls needed for the experiment. The goal was
              to reduce ambiguity and keep the interface usable in a busy,
              child-oriented museum environment.
            </p>
          </div>
        </section>

        <section className="caseStudySection">
          <p className="caseStudySectionLabel">04 · Museum experience</p>
          <div className="caseStudyFeature">
            <div>
              <h2>An interface designed as one part of a larger immersive system.</h2>
              <p>
                The installation combined a curved full-wall projection,
                multichannel sound, three futuristic vehicles, and the
                touchscreen controller. Vehicle sounds responded not only to the
                visitor's choices but also to movement in the animation.
              </p>
            </div>

            <aside className="caseStudyAside">
              <p className="caseStudyAsideTitle">Exhibition setup</p>
              <ul>
                <li>Curved 10 × 3 m projection wall</li>
                <li>30-second looped 4K city scene</li>
                <li>Eight-channel spatial sound</li>
                <li>Hoverboard, gyrochair & hangflyer</li>
                <li>Touchscreen interaction and data collection</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="caseStudySection">
          <p className="caseStudySectionLabel">05 · Outcome</p>
          <div className="caseStudyOutcome">
            <h2>Playfulness and simplicity became design requirements, not decoration.</h2>
            <div className="caseStudyProse">
              <p>
                The thesis evaluation involved hearing-impaired pre-teenagers,
                museum visitors, and additional hearing-impaired testers. The
                findings pointed to playful interaction and simple shapes as
                important ingredients for an interface aimed at younger museum
                visitors.
              </p>
              <p>
                The research also found the contribution of hearing-impaired
                participants relevant in the later stages of the soundscape
                design process, reinforcing the value of involving the people
                affected by those design decisions.
              </p>
            </div>
          </div>
        </section>

        <footer className="caseStudySources">
          <p className="caseStudySectionLabel">Project sources</p>
          <div>
            <a
              href="https://urn.kb.se/resolve?urn=urn:nbn:se:kth:diva-312787"
              target="_blank"
              rel="noreferrer"
            >
              KTH master thesis ↗
            </a>
            <a
              href="https://zenodo.org/records/10802532/files/NAVET_Projects_2019-2021.pdf?download=1"
              target="_blank"
              rel="noreferrer"
            >
              NAVET project documentation ↗
            </a>
            <a
              href="https://carlobarone.wixsite.com/main-page/fictitious-soundscapes"
              target="_blank"
              rel="noreferrer"
            >
              Original portfolio page ↗
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
