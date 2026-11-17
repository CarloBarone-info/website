import profilePortrait from "../assets/profile-portrait.jpg";
import { PageHeader } from "../components/PageHeader";
import { ContactList } from "../components/lists/ContactList";

export function ContactPage() {
  return (
    <div className="contentPage">
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk"
        intro="Whether you are building a digital product, planning an event, or coordinating a team, I would be happy to talk."
      />

      <figure className="contactPortrait">
        <img src={profilePortrait} alt="Professional portrait" />
        <figcaption>Photo © Allan Kamuran</figcaption>
      </figure>


      <ContactList />
    </div>
  );
}
