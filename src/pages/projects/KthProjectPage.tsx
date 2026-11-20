import { Link } from "react-router-dom";
import { ProjectCollection } from "../../components/ProjectCollection";
import { selectedWork } from "../../data/projects";

export function KthProjectPage() {
  return (
    <article className="projectPage kthPage educationPage">
      <Link className="backToProjects" to="/resume">
        <span aria-hidden="true">←</span> Back to résumé
      </Link>
      <header className="projectHeader">
        <p className="caseStudyEyebrow">KTH · 2020–2022</p>
        <h1>Research, education &amp; interaction design</h1>
        <p className="projectSubtitle">My work at KTH combined interactive media research, teaching assistance and the design and evaluation of experiences that make complex information understandable.</p>
      </header>

      <section className="educationHighlights" aria-label="KTH experience">
        <article>
          <p className="eyebrow">Education</p>
          <h2>MSc in Interactive Media Technology</h2>
          <p>Master’s studies in interaction, media technology and human-centred design, completed in 2022.</p>
        </article>
        <article>
          <p className="eyebrow">Teaching</p>
          <h2>Teaching assistant</h2>
          <p>Alongside my academic work I gained firsthand experience of education as a teaching assistant at KTH. I value the challenge of communicating complex ideas clearly and making learning approachable.</p>
        </article>
        <article>
          <p className="eyebrow">Research</p>
          <h2>Published interaction research</h2>
          <p>Co-authored a conference paper investigating how a tangible interface can make indoor air quality perceptible through sound.</p>
          <a href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1647647" target="_blank" rel="noreferrer">View publication record ↗</a>
        </article>
      </section>
      <ProjectCollection
        title="Research case studies"
        description="Two examples of developing an interactive prototype, evaluating the experience with participants and communicating the findings."
        items={selectedWork.filter((project) => project.slug !== "neovici")}
      />
      <section className="educationReflection">
        <h2>What connects research, teaching and product design?</h2>
        <p>All three depend on understanding the people an experience is designed for. I bring that perspective to digital products: clarifying complex information, considering different abilities, and using evidence to guide design decisions.</p>
        <Link className="button secondary" to="/projects">Explore all projects</Link>
      </section>
    </article>
  );
}
