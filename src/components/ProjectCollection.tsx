import { useId } from "react";
import type { Project } from "../data/projects";
import { Card } from "./Card";

type ProjectCollectionProps = {
  title: string;
  description: string;
  items: readonly Project[];
  variant?: "design" | "engineering" | "creative";
};

export function ProjectCollection({
  title,
  description,
  items,
  variant = "design",
}: ProjectCollectionProps) {
  const headingId = useId();

  return (
    <section className={`portfolioCollection portfolioCollection--${variant}`} aria-labelledby={headingId}>
      <div className="portfolioCollectionHeader">
        <h2 id={headingId}>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="portfolioProjectGrid">
        {items.map((project) => <Card key={project.slug} {...project} />)}
      </div>
    </section>
  );
}
