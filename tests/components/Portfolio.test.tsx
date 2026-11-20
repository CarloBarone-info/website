// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import { Home } from "../../src/pages/Home";
import { ProjectList } from "../../src/components/lists/ProjectList";
import { CaseStudyNavigation } from "../../src/components/CaseStudyNavigation";
import { FicSonPage } from "../../src/pages/projects/FicSonPage";
import { SonifyingHourglassPage } from "../../src/pages/projects/SonifyingHourglassPage";
import { NeoviciProjectPage } from "../../src/pages/projects/NeoviciProjectPage";
import { selectedWork } from "../../src/data/projects";
import { caseStudyDetails } from "../../src/data/caseStudies";

afterEach(cleanup);

describe("Portfolio discovery", () => {
  it("features the same three design studies on the homepage, in order", () => {
    render(<MemoryRouter><Home /></MemoryRouter>);
    const section = screen.getByRole("region", { name: "Selected design work" });
    const links = within(section).getAllByRole("link");
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "/projects/neovici",
      "/projects/fictitious-soundscapes",
      "/projects/sonifying-hourglass",
    ]);
    expect(screen.getByRole("link", { name: "Research & teaching" })).toHaveAttribute("href", "/projects/kth");
  });
  it("groups GitHub separately without removing creative work", () => {
    render(<MemoryRouter><ProjectList /></MemoryRouter>);
    const design = screen.getByRole("region", { name: "Selected design work" });
    expect(within(design).queryByRole("heading", { name: "GitHub" })).not.toBeInTheDocument();
    expect(within(screen.getByRole("region", { name: "Engineering" })).getByRole("heading", { name: "GitHub" })).toBeInTheDocument();
    expect(within(screen.getByRole("region", { name: "Creative practice" })).getByRole("heading", { name: "Music arrangements" })).toBeInTheDocument();
  });
  it("has a summary for each selected case", () => {
    expect(selectedWork.map((project) => project.slug)).toEqual(Object.keys(caseStudyDetails));
  });
  it("derives adjacent navigation from the catalogue", () => {
    render(<MemoryRouter><CaseStudyNavigation slug="fictitious-soundscapes" /></MemoryRouter>);
    const nav = screen.getByRole("navigation", { name: "Case study navigation" });
    expect(within(nav).getByRole("link", { name: /previous case study.*neovici/i })).toHaveAttribute("href", "/projects/neovici");
    expect(within(nav).getByRole("link", { name: /next case study.*sonifying hourglass/i })).toHaveAttribute("href", "/projects/sonifying-hourglass");
  });
});

describe("Case study structure", () => {
  it.each([FicSonPage, SonifyingHourglassPage, NeoviciProjectPage])("renders a shared overview and navigation with no nested main", (Page) => {
    render(<MemoryRouter><main><Page /></main></MemoryRouter>);
    expect(screen.getByRole("region", { name: "Overview" })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Case study navigation" })).toBeInTheDocument();
    expect(screen.getAllByRole("main")).toHaveLength(1);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });
});
