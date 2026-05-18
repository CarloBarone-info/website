import { ProjectCard } from "../../components/projectPages/ProjectCard";

export function ProjectPage(Header: any, ProjectCardContents: any) {
  return (
    <main className="projectPage">
      {Header}
      {ProjectCardContents.map(
        (content: { title: string; children: React.ReactNode }) => (
          <ProjectCard title={content.title}>{content.children}</ProjectCard>
        ),
      )}
    </main>
  );
}
