import { contacts } from "../data/contacts";
import { Card } from "./Card";

export function ContactList() {
  return (
    <section className="projects" id="projects">
      <h2>Selected projects</h2>

      <div className="projectGrid">
        {contacts.map((contact) => (
          <Card key={contact.title} {...contact} />
        ))}
      </div>
    </section>
  );
}