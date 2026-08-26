import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">Design · Engineering · Product</p>

      <h1>
        Hi, I’m Carlo.
        <span className="heroHeadline">
          I bridge design and engineering to build thoughtful digital products.
        </span>
      </h1>

      <p className="intro">
        I’m a Design Engineer and Frontend Developer working across UX,
        interaction design, and product development — from understanding
        problems and prototyping ideas to building accessible, polished
        interfaces.
      </p>

      <div className="heroActions">
        <Link to="/projects" className="button">
          View selected work
        </Link>

        <Link to="/resume" className="button secondary">
          About & résumé
        </Link>
      </div>
    </section>
  );
}
