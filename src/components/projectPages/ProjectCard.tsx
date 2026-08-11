import type { ProjectCardProps } from "../../types/props";

export function ProjectCard({
  title,
  children,
}: ProjectCardProps) {
  return (
    <section className="projectParagraph">
      {title && <h2>{title}</h2>}

      <div className="projectText">
        {children}
      </div>
    </section>
  );
}