export type ProjectSection = "selected-work" | "creative-practice";

export type Project = {
  title: string;
  slug: string;
  date: string;
  isProject: boolean;
  isLocalProject?: boolean;
  section: ProjectSection;
  description: string;
  impact: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "GitHub & portfolio",
    slug: "personal-portfolio",
    date: "2026–",
    isProject: true,
    section: "selected-work",
    description:
      "A growing collection of frontend, design-engineering, and product work, including this React and TypeScript portfolio and other experiments and repositories.",
    impact:
      "Built this portfolio as a product in its own right, with responsive UI, testing, CI, and automated deployment, while using GitHub as the broader record of my technical work.",
    tech: ["React", "TypeScript", "Vite", "Testing", "GitHub Actions"],
    link: "https://github.com/CarloBarone-info",
  },
  {
    title: "FicSon",
    slug: "fictitious-soundscapes",
    date: "2020–2022",
    isProject: true,
    isLocalProject: true,
    section: "selected-work",
    description:
      "A master's thesis project using designed soundscapes to investigate how sound-design techniques are experienced by hearing-impaired users.",
    impact:
      "The project was exhibited at Tekniska Museet in Stockholm and explored sound design through an accessibility-focused research process.",
    tech: [
      "Electronics",
      "Pure Data",
      "JavaScript",
      "DIY fabrication",
      "User-centered design",
      "Sound design",
      "Data sonification",
      "Accessibility",
    ],
    link: "https://carlobarone.wixsite.com/main-page/fictitious-soundscapes",
  },
  {
    title: "The Sonifying Hourglass",
    slug: "sonifying-hourglass",
    date: "2021–2022",
    isProject: true,
    isLocalProject: true,
    section: "selected-work",
    description:
      "A case study exploring how data sonification can make indoor air-pollution levels perceptible through sound and physical interaction.",
    impact:
      "Designed and built an interactive sonification prototype that was presented at the Sound and Music Computing Conference in 2022.",
    tech: [
      "Electronics",
      "Pure Data",
      "Arduino",
      "DIY fabrication",
      "User-centered design",
      "Sound design",
      "Data sonification",
    ],
    link: "https://carlobarone.wixsite.com/main-page/sonifying-hourglass",
  },
  {
    title: "Music arrangements",
    slug: "music-portfolio",
    date: "2023–",
    isProject: true,
    section: "creative-practice",
    description:
      "An ongoing collection of original compositions and arrangements across pop, classical, and jazz.",
    impact:
      "Built a growing body of composition and arrangement work exploring harmony, orchestration, and musical structure across different genres.",
    tech: ["Music theory", "MuseScore", "Pop music", "Classical music", "Jazz"],
    link: "https://musescore.com/user/59610958",
  },
  {
    title: "Indie Film Music Contest 2026",
    slug: "indie-film-music-contest",
    date: "2026",
    isProject: true,
    isLocalProject: true,
    section: "creative-practice",
    description:
      "An original film-scoring submission created for the Indie Film Music Contest 2026.",
    impact:
      "Composed, produced, and submitted an original score for the 2026 competition.",
    tech: ["Composition", "Sound Design", "Film Scoring"],
    link: "https://carlobarone.wixsite.com/main-page/indie-film-music-contest-2026",
  },
];

export const selectedWork = projects.filter(
  (project) => project.section === "selected-work",
);

export const creativePractice = projects.filter(
  (project) => project.section === "creative-practice",
);
