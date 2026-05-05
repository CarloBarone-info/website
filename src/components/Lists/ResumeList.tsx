import { experiences } from "../../data/experiences";
import { Card } from "../Card";

export function ResumeList() {
  return (
    <section className="experiences" id="experiences">
      <h2 className="pageTitle">Working Experiences</h2>

      <div className="experienceGrid">
        {experiences.map((experience) => (
          <Card key={experience.title} {...experience} />
        ))}
      </div>
    </section>
  );
}
