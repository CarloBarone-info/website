import { projects } from "../../data/projects";
import { List } from "../List";

export function ProjectList() {
  return (
    <List data={projects} type="projects" />
  );
}
    