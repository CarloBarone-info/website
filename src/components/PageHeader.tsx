type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHeader({
  eyebrow,
  title,
  intro,
}: PageHeaderProps) {
  return (
    <header className="pageHeader">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="pageHeaderIntro">{intro}</p>
    </header>
  );
}
