import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ResumeList } from "../components/lists/ResumeList";

const cvGroups = [
  {
    title: "Frontend & UX",
    description:
      "React, TypeScript, product development, and interaction design.",
    downloads: [
      { label: "English PDF", filename: "Carlo_Barone_CV_EN.pdf" },
      { label: "Svenska PDF", filename: "Carlo_Barone_CV_SV.pdf" },
    ],
  },
  {
    title: "Events & Coordination",
    description:
      "Festival planning, logistics, budgets, and organizational leadership.",
    downloads: [
      { label: "English PDF", filename: "Carlo_Barone_Events_CV_EN.pdf" },
      { label: "Svenska PDF", filename: "Carlo_Barone_Events_CV_SV.pdf" },
    ],
  },
];

export function ResumePage() {
  return (
    <div className="contentPage">
      <PageHeader
        eyebrow="Experience"
        title="Résumé"
        intro="My work in frontend, UX, research, and the teams behind live music events."
      />
      <ResumeList />

      <section className="eventExperienceIntro" aria-labelledby="event-experience-title">
        <div>
          <p className="eyebrow">Beyond digital products</p>
          <h2 id="event-experience-title">Events & leadership</h2>
          <p>
            I have coordinated concerts, tours, and a Nordic music festival for
            around 300 people. Explore how I planned and delivered them with
            the teams around me.
          </p>
        </div>
        <Link to="/events" className="button secondary">
          Explore event work
        </Link>
      </section>

      <section className="cvDownloads" aria-labelledby="cv-downloads-title">
        <p className="eyebrow">CV downloads</p>
        <h2 id="cv-downloads-title">Choose your focus</h2>
        <p className="cvDownloadsIntro">
          Two versions of my CV, each available in English and Swedish.
          Pick the one most relevant to you.
        </p>
        <div className="cvDownloadGrid">
          {cvGroups.map((group) => (
            <section className="cvDownloadCard" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="cvDownloadActions">
                {group.downloads.map((download) => (
                  <a
                    key={download.filename}
                    className="button secondary"
                    href={`${import.meta.env.BASE_URL}cv/${download.filename}`}
                    download
                    aria-label={`Download ${group.title} CV in ${download.label}`}
                  >
                    {download.label}
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
