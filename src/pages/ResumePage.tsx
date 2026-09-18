import { PageHeader } from "../components/PageHeader";
import { ResumeList } from "../components/lists/ResumeList";

export function ResumePage() {
  return (
    <div className="contentPage">
      <PageHeader
        eyebrow="Experience"
        title="Resumé"
        intro="A snapshot of the roles, products, and teams that have shaped how I work across design, engineering, and digital product development."
      />
      <ResumeList />
    </div>
  );
}
