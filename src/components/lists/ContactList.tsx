import { contacts } from "../../data/contacts";
import { List } from "../List";

export function ContactList() {
  return (
    <List data={contacts} type="contacts" />
  );
}