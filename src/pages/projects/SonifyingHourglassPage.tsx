import "../../styles/sonifyingHourglassPage.css";
import { BackToProjects } from "../../components/BackToProjects";
import sketchImage from "../../assets/projects/sonifying-hourglass/sketch.jpg";
import setupImage from "../../assets/projects/sonifying-hourglass/setup.png";
import finalModelImage from "../../assets/projects/sonifying-hourglass/final.png";

const soundModels = [
  {
    name: "Abstract",
    description:
      "A pulsating FM synthesis model where poorer air quality increased the pulse rate and intensity.",
  },
  {
    name: "Musical",
    description:
      "A bell-based model using tempo and pitch movement to communicate changes in air quality and the falling grains.",
  },
  {
    name: "Concrete",
    description:
      "A wind-inspired model connecting air quality to howling, gusts, and wire-like sounds.",
  },
  {
    name: "Cultural",
    description:
      "A frog-based model exploring learned associations such as coughing and a 'frog in the throat'.",
  },
];

export function SonifyingHourglassPage() {
  return (
    <article className="hourglassCaseStudy">
      <BackToProjects />
      <header className="hourglassHero">
        <div className="hourglassHeroCopy">
          <p className="hourglassEyebrow">
            Research prototype · KTH · SMC 2022
          </p>
          <h1>Sonifying Hourglass</h1>
          <p className="hourglassLead">
            A tangible interaction experiment exploring whether sound can make
            invisible indoor air-quality data easier to notice and understand.
          </p>

          <div className="hourglassActions">
            <a
              href="https://doi.org/10.5281/zenodo.6572709"
              target="_blank"
              rel="noreferrer"
            >
              Read the paper ↗
            </a>
            <a
              href="https://www.youtube.com/watch?v=hyWIo960J7M&t=1s"
              target="_blank"
              rel="noreferrer"
            >
              Watch the prototype ↗
            </a>
            <a
              href="https://carlobarone.wixsite.com/main-page/sonifying-hourglass"
              target="_blank"
              rel="noreferrer"
            >
              Original Wix page ↗
            </a>
          </div>
        </div>

        <figure className="hourglassHeroMedia">
          <img
            src={finalModelImage}
            alt="Finished Sonifying Hourglass prototype with Arduino and sensor electronics mounted beside the hourglass"
          />
          <figcaption>
            The finished physical prototype: hourglass, Arduino, sensors, and
            electronics integrated into one object.
          </figcaption>
        </figure>
      </header>

      <dl className="hourglassMeta" aria-label="Project overview">
        <div>
          <dt>Role</dt>
          <dd>Interaction, prototyping, sound & research</dd>
        </div>
        <div>
          <dt>Medium</dt>
          <dd>Physical computing + sonification</dd>
        </div>
        <div>
          <dt>Tools</dt>
          <dd>Arduino · Pure Data · sensors</dd>
        </div>
        <div>
          <dt>Outcome</dt>
          <dd>Published at SMC 2022</dd>
        </div>
      </dl>

      <main className="hourglassBody">
        <section className="hourglassSection">
          <p className="hourglassSectionLabel">01 · The problem</p>
          <h2>Air quality is important, but mostly invisible.</h2>
          <div className="hourglassProse">
            <p>
              Indoor CO₂ levels can deteriorate without giving people an obvious
              cue that something has changed. The project asked whether an
              ordinary desk object could turn that hidden environmental data
              into something perceptible through interaction and sound.
            </p>
            <p>
              Instead of adding another dashboard or notification, the concept
              used an hourglass: a familiar object people already understand,
              augmented so that turning it activates a sonic representation of
              the room's air quality.
            </p>
          </div>
        </section>

        <section className="hourglassSection">
          <p className="hourglassSectionLabel">02 · Early concept</p>
          <div className="hourglassConceptGrid">
            <figure className="hourglassProcessImage">
              <img
                src={sketchImage}
                alt="Early hand-drawn sketch of the Sonifying Hourglass concept showing speakers and an air pollution detector"
              />
              <figcaption>
                The first sketch already contained the core loop: sense the air,
                turn the hourglass, and make the data audible.
              </figcaption>
            </figure>

            <div>
              <h2>The interaction started on paper.</h2>
              <div className="hourglassProse">
                <p>
                  Before electronics or code, the concept was deliberately
                  simple: connect an air-pollution detector to a familiar
                  hourglass and let sound radiate from the object as the grains
                  fall.
                </p>
                <p>
                  That sketch established the main design idea early — the data
                  should not live on a screen. The physical object itself would
                  become the interface.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="hourglassSection">
          <p className="hourglassSectionLabel">03 · Prototype</p>
          <figure className="hourglassProcessImage hourglassProcessImageWide">
            <img
              src={setupImage}
              alt="First working Sonifying Hourglass setup connected to a laptop running the sound system"
            />
            <figcaption>
              First working setup: the physical prototype connected to the
              laptop while the sensing and sound pipeline was being tested.
            </figcaption>
          </figure>

          <div className="hourglassSplit">
            <div>
              <h2>A physical object became the interface.</h2>
              <div className="hourglassProse">
                <p>
                  The prototype combined a handmade hourglass with an Arduino
                  Uno, a CO₂ sensor, two photo-resistors, and an accelerometer.
                  Salt acted as the grains inside the chambers.
                </p>
                <p>
                  The accelerometer detected when the object was turned, while
                  the photo-resistors tracked the beginning and end of the grain
                  flow. Sensor data was sent to Pure Data on a laptop, where the
                  sound was generated in real time.
                </p>
              </div>
            </div>

            <aside className="hourglassSystem">
              <span>Air quality</span>
              <i>↓</i>
              <span>Sensors + Arduino</span>
              <i>↓</i>
              <span>Pure Data</span>
              <i>↓</i>
              <span>Sound while grains fall</span>
            </aside>
          </div>
        </section>

        <section className="hourglassSection">
          <p className="hourglassSectionLabel">04 · Sound design</p>
          <h2>Four different answers to the same data.</h2>
          <p className="hourglassSectionIntro">
            Rather than assuming one sonification was correct, the study
            compared four models built around different sound-design strategies.
          </p>

          <div className="soundModelGrid">
            {soundModels.map((model, index) => (
              <article className="soundModelCard" key={model.name}>
                <span>0{index + 1}</span>
                <h3>{model.name}</h3>
                <p>{model.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hourglassSection">
          <p className="hourglassSectionLabel">05 · In action</p>
          <h2>The interaction only makes sense when you hear it.</h2>
          <div className="hourglassVideo">
            <iframe
              src="https://www.youtube.com/embed/hyWIo960J7M?start=1"
              title="The Sonifying Hourglass prototype demonstration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <section className="hourglassSection">
          <p className="hourglassSectionLabel">06 · Evaluation</p>
          <div className="hourglassOutcome">
            <h2>Clarity alone was not enough.</h2>
            <div className="hourglassProse">
              <p>
                Eight participants evaluated the four sound models across three
                air-quality levels. The study looked both at whether people
                could correctly interpret the data and whether they actually
                wanted to hear the resulting sounds.
              </p>
              <p>
                The Abstract, Musical, and Concrete models communicated the air
                quality effectively, while the Cultural model performed less
                well. The Musical and Concrete approaches were also preferred
                sonically, making them stronger candidates for future
                iterations.
              </p>
            </div>
          </div>
        </section>

        <section className="hourglassSection hourglassLearning">
          <p className="hourglassSectionLabel">07 · What I took from it</p>
          <h2>
            A data interface can be understandable and still be unpleasant.
          </h2>
          <div className="hourglassProse">
            <p>
              The study exposed a useful design tension: a sound can communicate
              a value clearly while still feeling too alarming, tiring, or
              culturally mismatched for repeated everyday use.
            </p>
            <p>
              That pushed the project beyond pure data mapping and toward the
              broader experience of living with an interface over time — a
              lesson that still applies to product work well outside sound
              design.
            </p>
          </div>
        </section>

        <footer className="hourglassSources">
          <p className="hourglassSectionLabel">Project sources</p>
          <div>
            <a
              href="https://doi.org/10.5281/zenodo.6572709"
              target="_blank"
              rel="noreferrer"
            >
              SMC 2022 paper ↗
            </a>
            <a
              href="https://urn.kb.se/resolve?urn=urn:nbn:se:kth:diva-310316"
              target="_blank"
              rel="noreferrer"
            >
              KTH publication record ↗
            </a>
            <a
              href="https://www.youtube.com/watch?v=hyWIo960J7M&t=1s"
              target="_blank"
              rel="noreferrer"
            >
              Prototype demo ↗
            </a>
          </div>
        </footer>
      </main>
    </article>
  );
}
