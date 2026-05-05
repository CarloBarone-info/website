import type { CardProps } from "../types/CardProps";

export function Card({
  title,
  date,
  link,
  isProject,
  isContact,
  isExperience,
  description,
  impact,
  tech,
}: CardProps) {
  const renderCard = (
    isProject: boolean,
    isContact: boolean,
    isExperience: boolean,
  ) => {
    if (isProject) {
      return (
        <>
          <h3>{title}</h3>
          <h4 className="date">{date}</h4>
          {description && <p>{description}</p>}
          {impact && <p className="impact">{impact}</p>}
          <div className="techList">
            {tech && tech.map((item) => <span key={item}>{item}</span>)}
          </div>
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              View project →
            </a>
          )}
        </>
      );
    } else if (isContact) {
      return (
        <h3>
          <a
            href={link}
            target={link && link.startsWith("http") ? "_blank" : undefined}
            rel={link && link.startsWith("http") ? "noreferrer" : undefined}
          >
            {title}
          </a>
        </h3>
      );
    } else if (isExperience) {
      return (
        <>
          <h3>{title}</h3>
          <h4 className="date">{date}</h4>
          {description && <p>{description}</p>}
          {impact && <p className="impact">{impact}</p>}
          <a
            href={link}
            target={link && link.startsWith("http") ? "_blank" : undefined}
            rel={link && link.startsWith("http") ? "noreferrer" : undefined}
          >
            {"View company details →"}
          </a>
        </>
      );
    }
  };

  return (
    <article className="card">
      {renderCard(
        isProject || false,
        isContact || false,
        isExperience || false,
      )}
    </article>
  );
}
