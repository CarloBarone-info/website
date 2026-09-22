import { Link } from "react-router-dom";
import type { CardProps } from "../types/props";

function ContactIcon({ title }: { title: string }) {
  if (title === "GitHub") {
    return (
      <svg
        className="contactCardIcon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    );
  }

  if (title === "LinkedIn") {
    return (
      <svg
        className="contactCardIcon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="7" cy="8" r="2.5" />
        <circle cx="17" cy="7" r="2.5" />
        <circle cx="17" cy="17" r="2.5" />
        <path d="M9.3 9.2 14.5 7.8" />
        <path d="M9 9.7 15.2 15.5" />
        <path d="M17 9.5v5" />
      </svg>
    );
  }

  return (
    <svg
      className="contactCardIcon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m5 7 7 5 7-5" />
    </svg>
  );
}

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
  image,
  imageAlt,
  imageFit = "cover",
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
        <ContactIcon title={title} />
      </a>
    );
  }

  return (
    <article className="card cardVisual">
      {image && (
        <figure className={`cardMedia ${imageFit === "contain" ? "cardMediaContain" : ""}`}>
          <img src={image} alt={imageAlt ?? ""} loading="lazy" />
        </figure>
      )}

      <div className="cardContent">
      {isProject && (
        <>
          <h3>{title}</h3>
          <h4 className="date">{date}</h4>
          {description && <p className="cardSummary">{description}</p>}
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
          {description && <p className="cardSummary">{description}</p>}
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
      </div>
    </article>
  );
}
