import { useEffect, useState } from "react";
import {
  applyTheme,
  getInitialTheme,
  getStoredTheme,
  saveTheme,
  type Theme,
} from "../theme";

type ThemeToggleProps = {
  tabIndex?: number;
};

function SunIcon() {
  return (
    <svg
      className="themeToggleIcon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v2" />
      <path d="M12 19.5v2" />
      <path d="m5.3 5.3 1.4 1.4" />
      <path d="m17.3 17.3 1.4 1.4" />
      <path d="M2.5 12h2" />
      <path d="M19.5 12h2" />
      <path d="m5.3 18.7 1.4-1.4" />
      <path d="m17.3 6.7 1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="themeToggleIcon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20 15.3A8.2 8.2 0 0 1 8.7 4a8.2 8.2 0 1 0 11.3 11.3Z" />
    </svg>
  );
}

export function ThemeToggle({ tabIndex = 0 }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (getStoredTheme()) return;

      setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const nextTheme: Theme = isDark ? "light" : "dark";

    setTheme(nextTheme);
    saveTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className="themeToggle"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      tabIndex={tabIndex}
      onClick={toggleTheme}
    >
      <SunIcon />
      <span className="themeToggleTrack" aria-hidden="true">
        <span className="themeToggleThumb" />
      </span>
      <MoonIcon />
    </button>
  );
}
