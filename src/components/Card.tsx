import { Link } from "react-router-dom";
import type { CardProps } from "../types/props";

function ExternalLinkIcon() {
  return (
    <svg
      className="cardCtaIcon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14 5h5v5" />
      <path d="M19 5 11 13" />
      <path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

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
  projectLabel,
  externalLabel,
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
                View case study
              </Link>
            ) : (
              <a
                className="cardCta cardCtaPrimary"
                href={link}
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noreferrer" : undefined}
              >
                View project
                <ExternalLinkIcon />
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
                {projectLabel ?? "Role & contributions"}
              </Link>
            )}
            <a
              className={`cardCta ${projectPath ? "cardCtaSecondary" : "cardCtaPrimary"}`}
              href={link}
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noreferrer" : undefined}
            >
              {externalLabel ?? "Organisation website"}
              <ExternalLinkIcon />
            </a>
          </div>
        </>
      )}
    </article>
  );
}
