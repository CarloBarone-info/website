import "../../styles/indieFilmMusicContestPage.css";
import { BackToProjects } from "../../components/BackToProjects";

export function IndieFilmMusicContestPage() {
  return (
    <article className="filmCaseStudy">
      <BackToProjects />
      <header className="filmHero">
        <div className="filmHeroCopy">
          <p className="filmEyebrow">Creative practice · Film scoring · 2026</p>
          <h1>Indie Film Music Contest 2026</h1>
          <p className="filmLead">
            Two original scoring entries exploring how composition, sound, and
            timing can support very different kinds of moving image.
          </p>

          <div className="filmActions">
            <a
              href="https://carlobarone.wixsite.com/main-page/indie-film-music-contest-2026"
              target="_blank"
              rel="noreferrer"
            >
              Original Wix page ↗
            </a>
          </div>
        </div>

        <aside className="filmHeroPanel" aria-label="Project overview">
          <span className="filmPanelKicker">Two entries</span>
          <strong>Animation + live action</strong>
          <p>
            A compact film-scoring project focused on composition, sound design,
            and writing music directly to picture.
          </p>
        </aside>
      </header>

      <dl className="filmMeta" aria-label="Project details">
        <div>
          <dt>Role</dt>
          <dd>Composition & production</dd>
        </div>
        <div>
          <dt>Format</dt>
          <dd>Two film-scoring entries</dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>Composition · Sound design · Film scoring</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>2026</dd>
        </div>
      </dl>

      <main className="filmBody">
        <section className="filmSection filmIntroSection">
          <p className="filmSectionLabel">01 · The project</p>
          <h2>Writing for picture means listening to what the image needs.</h2>
          <div className="filmProse">
            <p>
              This project brings together two original entries prepared for the
              Indie Film Music Contest 2026: one animation and one live-action
              extract.
            </p>
            <p>
              The two pieces sit on the creative-practice side of my work, where
              timing, atmosphere, musical structure, and sound design become
              tools for supporting a visual narrative.
            </p>
          </div>
        </section>

        <section className="filmSection filmEntry">
          <div className="filmEntryHeader">
            <div>
              <p className="filmSectionLabel">02 · Entry one</p>
              <h2>Animation</h2>
            </div>
            <span className="filmEntryNumber" aria-hidden="true">
              01
            </span>
          </div>

          <div className="filmVideo">
            <iframe
              src="https://www.youtube.com/embed/MGvWJ39T7gQ?si=06BZrrxZZjMuv1fi"
              title="Indie Film Music Contest animation entry"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <p className="filmCaption">
            Original scoring entry for an animated sequence.
          </p>
        </section>

        <section className="filmSection filmEntry">
          <div className="filmEntryHeader">
            <div>
              <p className="filmSectionLabel">03 · Entry two</p>
              <h2>Live action</h2>
            </div>
            <span className="filmEntryNumber" aria-hidden="true">
              02
            </span>
          </div>

          <div className="filmVideo">
            <iframe
              src="https://www.youtube.com/embed/k1xd1L15KUU?si=el0vuKW_gR3nw4Tf"
              title="Indie Film Music Contest live-action entry"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <p className="filmCaption">
            Film extract used with permission from Cameron Perry — A Grade
            Students.
          </p>
        </section>

        <section className="filmSection filmClosing">
          <p className="filmSectionLabel">04 · Creative practice</p>
          <div className="filmClosingGrid">
            <h2>Different images, different musical decisions.</h2>
            <div className="filmProse">
              <p>
                Putting both entries together makes the contrast part of the
                case study: the same core craft — composition for picture — has
                to adapt to different pacing, tone, and visual language.
              </p>
              <p>
                That adaptability is what makes film scoring useful to my wider
                design practice too: rhythm, emphasis, atmosphere, and timing
                all shape how an experience is perceived.
              </p>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
}
