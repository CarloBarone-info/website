import { Link } from "react-router-dom";
import { getAdjacentCaseStudies, type CaseStudySlug } from "../data/caseStudies";

export function CaseStudyNavigation({ slug }: { slug: CaseStudySlug }) {
  const { previous, next } = getAdjacentCaseStudies(slug);
  return (
    <nav className="caseNavigation" aria-label="Case study navigation">
      <div className="caseNavigationGrid">
        {previous && (
          <Link to={`/projects/${previous.slug}`}>
            <span>← Previous case study</span>
            <strong>{previous.title}</strong>
          </Link>
        )}
        {next && (
          <Link to={`/projects/${next.slug}`}>
            <span>Next case study →</span>
            <strong>{next.title}</strong>
          </Link>
        )}
      </div>
      <Link className="button secondary" to="/projects">All projects</Link>
    </nav>
  );
}
