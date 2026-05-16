import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { ResumePage } from "./pages/ResumePage";
import { SonifyingHourglassPage } from "./pages/projects/SonifyingHourglassPage";

function App() {
  return (
    <BrowserRouter basename="/website">
      <main className="page">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/resume">Resumé</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/projects/sonifying-hourglass"
            element={<SonifyingHourglassPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;