import type { HeaderProps } from "../../types/props";

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="projectHeader">
      <h1>{title}</h1>

      {subtitle && (
        <p className="projectSubtitle">
          {subtitle}
        </p>
      )}
    </header>
  );
}