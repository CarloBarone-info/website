import { Link } from "react-router-dom";
import profilePortrait from "../assets/profile-portrait.jpg";

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="heroCopy">
        <p className="eyebrow heroEyebrow">Frontend · UX · Event coordination</p>
        <h1>
          Hi, I’m Carlo.
          <span className="heroHeadline">
            I build digital experiences and bring people together.
          </span>
        </h1>

        <p className="intro">
          I'm a frontend developer and UX designer with experience bringing
          concerts, tours, and an international music festival to life.
          Whether I'm creating an interface or coordinating people and
          logistics, I care about making complex things work smoothly.
        </p>

        <div className="heroActions">
          <Link to="/resume" className="button secondary">
            Résumé
          </Link>
          <Link to="/projects" className="button secondary">
            Projects
          </Link>
          <Link to="/events" className="button secondary">
            Events &amp; leadership
          </Link>
        </div>
      </div>

      <figure className="heroPortrait">
        <img
          src={profilePortrait}
          alt="Portrait of Carlo Barone"
          loading="eager"
          fetchPriority="high"
        />
        <figcaption>Photo © Allan Kamuran</figcaption>
      </figure>
    </section>
  );
}
