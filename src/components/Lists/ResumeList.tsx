import { experiences } from "../../data/experiences";
import { List } from "../List";

export function ResumeList() {
  return (
    <List data={experiences} type="experiences" />
  );
}

     