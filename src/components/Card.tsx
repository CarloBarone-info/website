import { Link } from "react-router-dom";
import type { CardProps } from "../types/props";

export function Card({
  title,
  slug,
  date,
  link,
  isProject,
  isLocalProject = false,
  isContact,
  isExperience,
  projectPath,
  description,
  impact,
  tech,
}: CardProps) {
  const isExternalLink = link?.startsWith("http");

  if (isContact) {
    return (
      <a
        className="card contactCard"
        href={link}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noreferrer" : undefined}
      >
        <h3>{title}</h3>
        <span className="contactCardArrow" aria-hidden="true">
          ↗
        </span>
      </a>
    );
  }

  return (
    <article className="card">
      {isProject && (
        <>
          <h3>{title}</h3>
          <h4 className="date">{date}</h4>
          {description && <p>{description}</p>}
          {impact && <p className="impact">{impact}</p>}
          <div className="techList">
            {tech?.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="cardActions">
            {isLocalProject ? (
              <Link className="cardCta cardCtaPrimary" to={`/projects/${slug}`}>
                View case study →
              </Link>
            ) : (
              <a
                className="cardCta cardCtaPrimary"
                href={link}
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noreferrer" : undefined}
              >
                View project ↗
              </a>
            )}
          </div>
        </>
      )}

      {isExperience && (
        <>
          <h3>{title}</h3>
          <h4 className="date">{date}</h4>
          {description && <p>{description}</p>}
          {impact && <p className="impact">{impact}</p>}
          <div className="cardActions">
            {projectPath && (
              <Link className="cardCta cardCtaPrimary" to={projectPath}>
                Role & contributions →
              </Link>
            )}
            <a
              className={`cardCta ${projectPath ? "cardCtaSecondary" : "cardCtaPrimary"}`}
              href={link}
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noreferrer" : undefined}
            >
              {projectPath ? "Company details (external) ↗" : "Organisation website ↗"}
            </a>
          </div>
        </>
      )}
    </article>
  );
}
