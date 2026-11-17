// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { Hero } from "../../src/components/Hero";

describe("Hero", () => {
  it("communicates the updated portfolio positioning and exposes its main actions", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Hi, I’m Carlo.");
    expect(heading).toHaveTextContent(
      "I build digital experiences and bring people together.",
    );

    const resume = screen.getByRole("link", { name: "Résumé" });
    const projects = screen.getByRole("link", { name: "Projects" });
    const events = screen.getByRole("link", { name: "Events & leadership" });

    expect(resume).toHaveAttribute("href", "/resume");
    expect(projects).toHaveAttribute("href", "/projects");
    expect(events).toHaveAttribute("href", "/events");

    // Match the main navigation order for predictable wayfinding.
    expect(screen.getAllByRole("link")).toEqual([resume, projects, events]);

    expect(
      screen.getByRole("img", { name: "Portrait of Carlo Barone" }),
    ).toBeInTheDocument();
  });
});
