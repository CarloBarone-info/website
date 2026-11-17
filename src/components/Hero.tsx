import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="hero">
      <h1>
        Hi, I’m Carlo.
        <span className="heroHeadline">
          I build digital experiences and bring people together through live events.
        </span>
      </h1>

      <p className="intro">
        I'm a frontend developer and UX designer with hands-on experience
        coordinating concerts, tours, and an international student-orchestra
        festival. I care about clear communication, good collaboration, and
        creating experiences that work for the people involved.
      </p>

      <div className="heroActions">
        <Link to="/projects" className="button">
          Digital & creative work
        </Link>

        <Link to="/events" className="button secondary">
          Events & leadership
        </Link>

        <Link to="/resume" className="button secondary">
          Experience & résumé
        </Link>
      </div>
    </section>
  );
}
