import type { CardProps } from "../types/props";

const neoviciImage =
  "https://cdn.prod.website-files.com/612c779ad9c35386e150549b/6193adb686c1e914d27da4d0_reposition.png";

const kthImage =
  "https://static.wixstatic.com/media/4ad051_b8d06067c0b44ed0901e5c71332e7f1a~mv2.jpg/v1/crop/x_0%2Cy_38%2Cw_960%2Ch_1204/fill/w_369%2Ch_463%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/TekniskaFicSon.jpg";

export const experiences = [
  {
    title: "Frontend Developer & UX Designer @ Neovici AB",
    date: "2023-2026",
    isExperience: true,
    projectPath: "/projects/neovici",
    projectLabel: "Role & contributions",
    externalLabel: "Company details",
    description: "Frontend development and UX on the Cosmoz platform.",
    image: neoviciImage,
    imageAlt: "Public Cosmoz product illustration from Neovici",
    imageFit: "contain",
    link: "https://www.neovici.se",
  },
  {
    title:
      "Researcher and Teacher's Assistant @ KTH Royal Institute of Technology",
    date: "2020-2022",
    isExperience: true,
    projectPath: "/projects/kth",
    projectLabel: "Research & teaching",
    externalLabel: "KTH website",
    description: "Research and teaching across sound, accessibility, and interactive media.",
    image: kthImage,
    imageAlt: "FicSon installation developed during KTH work at Tekniska Museet",
    link: "https://www.kth.se",
  },
] satisfies CardProps[];
