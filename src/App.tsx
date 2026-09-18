import "./App.css";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { ResumePage } from "./pages/ResumePage";
import { SonifyingHourglassPage } from "./pages/projects/SonifyingHourglassPage";
import { IndieFilmMusicContestPage } from "./pages/projects/IndieFilmMusicContestPage";

function App() {
  return (
    <HashRouter>
      <main className="page">
        <nav className="nav" aria-label="Primary navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/resume">Resumé</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/projects/sonifying-hourglass"
            element={<SonifyingHourglassPage />}
          />
          <Route
            path="/projects/indie-film-music-contest"
            element={<IndieFilmMusicContestPage />}
          />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
