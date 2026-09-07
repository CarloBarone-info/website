import { ProjectCard } from "../../components/projectPages/ProjectCard";
// Project pages currently accept heterogeneous project data.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
