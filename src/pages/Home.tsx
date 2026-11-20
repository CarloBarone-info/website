import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { ProjectCollection } from "../components/ProjectCollection";
import { selectedWork } from "../data/projects";

export function Home() {
  return (
    <div className="portfolioHome">
      <Hero />
      <ProjectCollection
        title="Selected design work"
        description="Three perspectives on the same challenge: making complex systems understandable, useful, and human."
        items={selectedWork}
      />
      <div className="portfolioAllWork">
        <Link className="button secondary" to="/projects">Explore all projects</Link>
      </div>
      <section className="portfolioExplore" aria-label="More about my work">
        <article>
          <p className="eyebrow">Research &amp; education</p>
          <h2>Understanding how people learn and interact</h2>
          <p>Published research, teaching assistance and accessible interaction design at KTH.</p>
          <Link to="/projects/kth">Research &amp; teaching <span aria-hidden="true">→</span></Link>
        </article>
        <article>
          <p className="eyebrow">Events &amp; leadership</p>
          <h2>Making ambitious ideas happen together</h2>
          <p>Concerts, tours and the coordination of a Nordic music festival for approximately 300 participants.</p>
          <Link to="/events">Explore event work <span aria-hidden="true">→</span></Link>
        </article>
      </section>
    </div>
  );
}
