import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { ResumePage } from "./pages/ResumePage";
import { SonifyingHourglassPage } from "./pages/projects/SonifyingHourglassPage";
import { IndieFilmMusicContestPage } from "./pages/projects/IndieFilmMusicContestPage";
import { SideNav } from "./components/SideNav";

function App() {
  return (
    <HashRouter>
      <SideNav />

      <main className="page">
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
