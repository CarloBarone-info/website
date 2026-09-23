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


      <ContactList />
    </div>
  );
}
