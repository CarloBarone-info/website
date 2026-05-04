export function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">Portfolio</p>
      <h1>Hi, I’m Carlo Barone.</h1>
      <p className="intro">
        I build web projects with React, TypeScript, and modern development
        tools. This portfolio collects my projects, experiments, and learning
        journey.
      </p>
      <div className="heroActions">
        <a href="#projects" className="button">
          View projects
        </a>
        <a href="mailto:carlo.barone.info@gmail.com" className="button secondary">
          Contact me
        </a>
      </div>
    </section>
  );
}