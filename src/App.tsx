import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { ResumePage } from "./pages/ResumePage";
import { SonifyingHourglassPage } from "./pages/projects/SonifyingHourglassPage";
import { FicSonPage } from "./pages/projects/FicSonPage";
import { IndieFilmMusicContestPage } from "./pages/projects/IndieFilmMusicContestPage";
import { NeoviciProjectPage } from "./pages/projects/NeoviciProjectPage";
import { KthProjectPage } from "./pages/projects/KthProjectPage";
import { SideNav } from "./components/SideNav";
import { BackToTop } from "./components/BackToTop";
import { ScrollToTopOnNavigation } from "./components/ScrollToTopOnNavigation";

function App() {
  return (
    <HashRouter>
      <SideNav />
      <ScrollToTopOnNavigation />
      <BackToTop />

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/projects/fictitious-soundscapes"
            element={<FicSonPage />}
          />
          <Route
            path="/projects/sonifying-hourglass"
            element={<SonifyingHourglassPage />}
          />
          <Route
            path="/projects/indie-film-music-contest"
            element={<IndieFilmMusicContestPage />}
          />
          <Route path="/projects/neovici" element={<NeoviciProjectPage />} />
          <Route path="/projects/kth" element={<KthProjectPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
