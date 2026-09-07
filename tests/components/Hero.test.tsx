// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { Hero } from "../../src/components/Hero";

describe("Hero", () => {
  it("communicates the portfolio positioning and exposes its main actions", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "I bridge design and engineering to build thoughtful digital products.",
    );

    expect(
      screen.getByRole("link", { name: /view selected work/i }),
    ).toHaveAttribute("href", "/projects");

    expect(
      screen.getByRole("link", { name: /about & résumé/i }),
    ).toHaveAttribute("href", "/resume");
  });
});
