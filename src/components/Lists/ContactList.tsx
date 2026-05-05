import { contacts } from "../../data/contacts";
import { Card } from "../Card";

export function ContactList() {
  return (
    <section className="contacts" id="contacts">
      <h2 className="pageTitle">Pages and Contacts</h2>

      <div className="contactGrid">
        {contacts.map((contact) => (
          <Card key={contact.title} {...contact} />
        ))}
      </div>
    </section>
  );
}