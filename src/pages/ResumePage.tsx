import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ResumeList } from "../components/lists/ResumeList";

export function ResumePage() {
  return (
    <div className="contentPage">
      <PageHeader
        eyebrow="Experience"
        title="Resumé"
        intro="A snapshot of my work in frontend, UX, research, and the teams behind live music events."
      />
      <ResumeList />

      <section className="cvDownloads" aria-labelledby="event-experience-title">
        <p className="eyebrow">Beyond digital products</p>
        <h2 id="event-experience-title">Events & leadership</h2>
        <p style={{ margin: "14px auto 22px", maxWidth: "35rem", lineHeight: 1.6 }}>
          I have organized concerts, a Nordic music festival for around 300 people,
          and orchestra tours, while holding several leadership roles.
        </p>
        <Link to="/events" className="button secondary">Explore event work</Link>
      </section>

      <section className="cvDownloads" aria-labelledby="cv-downloads-title">
        <p className="eyebrow">Résumé</p>
        <h2 id="cv-downloads-title">Download my CV</h2>
        <div className="cvDownloadActions">
          <a
            className="button secondary"
            href={`${import.meta.env.BASE_URL}cv/Carlo_Barone_CV_EN.pdf`}
            download
          >
            English · PDF
          </a>
          <a
            className="button secondary"
            href={`${import.meta.env.BASE_URL}cv/Carlo_Barone_CV_SV.pdf`}
            download
          >
            Svenska · PDF
          </a>
        </div>
      </section>
    </div>
  );
}
