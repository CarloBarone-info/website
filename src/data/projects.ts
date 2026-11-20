import gitHubLogo from "../assets/projects/github-portfolio/github-logo.png";
import hourglassFinalImage from "../assets/projects/sonifying-hourglass/final.png";
import museScoreImage from "../assets/projects/musescore/musescore-image.png";

const neoviciImage =
  "https://cdn.prod.website-files.com/612c779ad9c35386e150549b/6193adb686c1e914d27da4d0_reposition.png";

const ficsonImage =
  "https://static.wixstatic.com/media/4ad051_b8d06067c0b44ed0901e5c71332e7f1a~mv2.jpg/v1/crop/x_0%2Cy_38%2Cw_960%2Ch_1204/fill/w_369%2Ch_463%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/TekniskaFicSon.jpg";

const indieFilmImage = "https://img.youtube.com/vi/MGvWJ39T7gQ/hqdefault.jpg";

export type ProjectSection = "selected-work" | "engineering" | "creative-practice";

export type Project = {
  title: string;
  slug: string;
  date: string;
  isProject: boolean;
  isLocalProject?: boolean;
  section: ProjectSection;
  description: string;
  link: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  disciplines?: readonly string[];
  outcome?: string;
};

export const projects: Project[] = [
  {
    title: "Neovici · Cosmoz",
    slug: "neovici",
    date: "2023–2026",
    isProject: true,
    isLocalProject: true,
    section: "selected-work",
    description: "Translating complex financial workflows into maintainable, usable digital interfaces.",
    disciplines: ["Enterprise UX", "Component architecture", "Frontend"],
    outcome: "Professional product development on an established financial automation platform",
    image: neoviciImage,
    imageAlt: "Public Cosmoz product illustration from Neovici",
    imageFit: "contain",
    link: "https://www.neovici.se/platform",
  },
  {
    title: "GitHub",
    slug: "github-projects",
    date: "2026–",
    isProject: true,
    section: "engineering",
    description: "The code behind this portfolio and my other projects, including testing and deployment.",
    image: gitHubLogo,
    imageAlt: "GitHub logo",
    link: "https://github.com/CarloBarone-info",
  },
  {
    title: "Fictitious Soundscapes",
    slug: "fictitious-soundscapes",
    date: "2020–2022",
    isProject: true,
    isLocalProject: true,
    section: "selected-work",
    description:
      "Designing a playful, accessible touchscreen experience for younger museum visitors and people with hearing impairments.",
    disciplines: ["Inclusive design", "Prototyping", "User evaluation"],
    outcome: "Interactive installation at Tekniska Museet · Master’s thesis",
    image: ficsonImage,
    imageAlt: "FicSon installation at Tekniska Museet in Stockholm",
    link: "https://carlobarone.wixsite.com/main-page/fictitious-soundscapes",
  },
  {
    title: "Sonifying Hourglass",
    slug: "sonifying-hourglass",
    date: "2021–2022",
    isProject: true,
    isLocalProject: true,
    section: "selected-work",
    description:
      "Making invisible air-quality information understandable through a tangible interface, then testing four sound models.",
    disciplines: ["Interaction design", "Experimentation", "Research"],
    outcome: "Eight-participant evaluation · Published at SMC 2022",
    image: hourglassFinalImage,
    imageAlt: "Finished Sonifying Hourglass prototype",
    link: "https://carlobarone.wixsite.com/main-page/sonifying-hourglass",
  },
  {
    title: "Indie Film Music Contest 2026",
    slug: "indie-film-music-contest",
    date: "2026",
    isProject: true,
    isLocalProject: true,
    section: "creative-practice",
    description:
      "Two original film-scoring entries for animation and live action.",
    image: indieFilmImage,
    imageAlt: "Frame from the Indie Film Music Contest animation entry",
    link: "https://carlobarone.wixsite.com/main-page/indie-film-music-contest-2026",
  },
  {
    title: "Music arrangements",
    slug: "music-portfolio",
    date: "2023–",
    isProject: true,
    section: "creative-practice",
    description:
      "MuseScore portfolio of original compositions and arrangements across several genres.",
    image: museScoreImage,
    imageAlt: "MuseScore sheet-music preview artwork",
    link: "https://musescore.com/user/59610958",
  },
];

export const selectedWork = projects.filter(
  (project) => project.section === "selected-work",
);

export const creativePractice = projects.filter(
  (project) => project.section === "creative-practice",
);

export const engineeringWork = projects.filter(
  (project) => project.section === "engineering",
);
