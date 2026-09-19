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
          {isLocalProject ? (
            <Link to={`/projects/${slug}`}>View project →</Link>
          ) : (
            <a
              href={link}
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noreferrer" : undefined}
            >
              {title + " (external link)"}
            </a>
          )}
        </>
      )}

      {isExperience && (
        <>
          <h3>{title}</h3>
          <h4 className="date">{date}</h4>
          {description && <p>{description}</p>}
          {impact && <p className="impact">{impact}</p>}
          <a
            href={link}
            target={isExternalLink ? "_blank" : undefined}
            rel={isExternalLink ? "noreferrer" : undefined}
          >
            View company details →
          </a>
        </>
      )}
    </article>
  );
}
