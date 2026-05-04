type ProjectCardProps = {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  link?: string;
};

export function ProjectCard({
  title,
  description,
  impact,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <article className="projectCard">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="impact">{impact}</p>

      <div className="techList">
        {tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          View project →
        </a>
      )}
    </article>
  );
}