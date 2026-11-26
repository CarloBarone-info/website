import { selectedWork } from "./projects";

type CaseStudyDetail = {
  summary: string;
  facts: readonly { label: string; value: string }[];
  takeaway: string;
};

export const caseStudyDetails = {
  neovici: {
    summary: "I worked at the intersection of UX and frontend engineering on Cosmoz, translating product requests into interaction decisions and working interfaces. Modernisation needed to preserve established financial workflows rather than start from a blank slate.",
    facts: [
      { label: "Role", value: "Frontend Developer & UX Designer" },
      { label: "Context", value: "Cosmoz · Neovici · 2023–2026" },
      { label: "Methods", value: "Workflow reasoning, component development, cross-functional collaboration" },
      { label: "Outcome", value: "Incremental product development and component modernisation" },
    ],
    takeaway: "A design is only useful if it supports the real workflow and can be implemented, maintained and evolved safely.",
  },
  "fictitious-soundscapes": {
    summary: "For my KTH master’s thesis, I designed and implemented the touchscreen interface for an interactive soundscape installation and evaluated its use across three phases. The design made complex sound controls approachable in a busy museum setting.",
    facts: [
      { label: "Role", value: "Interface design, programming & evaluation" },
      { label: "Context", value: "KTH master’s thesis · NAVET · 2022" },
      { label: "Methods", value: "Prototyping, user evaluation, qualitative and quantitative analysis" },
      { label: "Outcome", value: "Interactive museum exhibition · Published thesis" },
    ],
    takeaway: "In a public learning environment, playful interaction and clear affordances are functional requirements, not just decoration.",
  },
  "sonifying-hourglass": {
    summary: "Our team explored how a familiar physical object could communicate indoor air quality through sound. Eight participants evaluated four sound models across three air-quality levels, considering both comprehension and preference.",
    facts: [
      { label: "Role", value: "Interaction, prototyping, sound & research" },
      { label: "Context", value: "Collaborative research prototype · KTH · 2021–2022" },
      { label: "Methods", value: "Physical prototyping, comparative user study, sound design" },
      { label: "Outcome", value: "Peer-reviewed conference paper · SMC 2022" },
    ],
    takeaway: "An interface can communicate information correctly and still be unpleasant to use. Comprehension and the quality of the experience both matter.",
  },
} satisfies Record<string, CaseStudyDetail>;

export type CaseStudySlug = keyof typeof caseStudyDetails;

export function getAdjacentCaseStudies(slug: CaseStudySlug) {
  const index = selectedWork.findIndex((project) => project.slug === slug);
  if (index === -1) return {};
  return {
    previous: index > 0 ? selectedWork[index - 1] : undefined,
    next: selectedWork[index + 1],
  };
}
