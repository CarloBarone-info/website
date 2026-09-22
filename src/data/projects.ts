import githubLogo from "../assets/projects/github-portfolio/github-logo.png";
import hourglassFinalImage from "../assets/projects/sonifying-hourglass/final.png";

const ficsonImage =
  "https://static.wixstatic.com/media/4ad051_b8d06067c0b44ed0901e5c71332e7f1a~mv2.jpg/v1/crop/x_0%2Cy_38%2Cw_960%2Ch_1204/fill/w_369%2Ch_463%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/TekniskaFicSon.jpg";

const indieFilmImage =
  "https://img.youtube.com/vi/MGvWJ39T7gQ/hqdefault.jpg";

const museScoreImage =
  "https://musescore.com/static/public/img/musescore/footer_cards_ver1786377230.png";

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
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
};

export const projects: Project[] = [
  {
    title: "GitHub & portfolio",
    slug: "personal-portfolio",
    date: "2026–",
    isProject: true,
    section: "selected-work",
    description: "This portfolio and the GitHub work behind it.",
    image: githubLogo,
    imageAlt: "GitHub logo",
    imageFit: "contain",
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
    description: "Accessible interaction design for speculative urban soundscapes.",
    image: ficsonImage,
    imageAlt: "FicSon installation at Tekniska Museet in Stockholm",
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
    description: "A tangible sonification prototype for indoor air-quality data.",
    image: hourglassFinalImage,
    imageAlt: "Finished Sonifying Hourglass prototype",
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
    title: "Indie Film Music Contest 2026",
    slug: "indie-film-music-contest",
    date: "2026",
    isProject: true,
    isLocalProject: true,
    section: "creative-practice",
    description: "Two original film-scoring entries for animation and live action.",
    image: indieFilmImage,
    imageAlt: "Frame from the Indie Film Music Contest animation entry",
    impact:
      "Composed, produced, and submitted an original score for the 2026 competition.",
    tech: ["Composition", "Sound Design", "Film Scoring"],
    link: "https://carlobarone.wixsite.com/main-page/indie-film-music-contest-2026",
  },
  {
    title: "Music arrangements",
    slug: "music-portfolio",
    date: "2023–",
    isProject: true,
    section: "creative-practice",
    description: "Original compositions and arrangements across several genres.",
    image: museScoreImage,
    imageAlt: "MuseScore sheet-music preview artwork",
    impact:
      "Built a growing body of composition and arrangement work exploring harmony, orchestration, and musical structure across different genres.",
    tech: ["Music theory", "MuseScore", "Pop music", "Classical music", "Jazz"],
    link: "https://musescore.com/user/59610958",
  },
];

export const selectedWork = projects.filter(
  (project) => project.section === "selected-work",
);

export const creativePractice = projects.filter(
  (project) => project.section === "creative-practice",
);
