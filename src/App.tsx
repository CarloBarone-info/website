import "./App.css";
import { Hero } from "./components/Hero";
import { ProjectList } from "./components/ProjectList";

function App() {
  return (
    <main className="page">
      <Hero />
      <ProjectList />
    </main>
  );
}

export default App;