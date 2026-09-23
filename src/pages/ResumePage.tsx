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
