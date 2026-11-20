import { useId } from "react";
import { caseStudyDetails, type CaseStudySlug } from "../data/caseStudies";

export function CaseStudyOverview({ slug }: { slug: CaseStudySlug }) {
  const headingId = useId();
  const study = caseStudyDetails[slug];
  return (
    <section className="caseOverview" aria-labelledby={headingId}>
      <div className="caseOverviewIntro">
        <p className="eyebrow">Case study at a glance</p>
        <h2 id={headingId}>Overview</h2>
        <p>{study.summary}</p>
      </div>
      <dl className="caseOverviewFacts">
        {study.facts.map(({ label, value }) => (
          <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
        ))}
      </dl>
      <p className="caseOverviewTakeaway"><strong>Key takeaway</strong><span>{study.takeaway}</span></p>
    </section>
  );
}
