import type { HeaderProps } from "../../types/props";

export function Header({ title, subtitle }: HeaderProps) {
    console.log(title);
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