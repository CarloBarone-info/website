import profilePortrait from "../assets/profile-portrait.jpg";
import { PageHeader } from "../components/PageHeader";
import { ContactList } from "../components/lists/ContactList";

export function ContactPage() {
  return (
    <div className="contentPage">
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk"
        intro="If you’re working on a digital product, interface, or interaction challenge and think I could help, these are the best ways to reach me."
      />

      <figure className="contactPortrait">
        <img src={profilePortrait} alt="Professional portrait" />
        <figcaption>Photo © Allan Kamuran</figcaption>
      </figure>

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

      <ContactList />
    </div>
  );
}
