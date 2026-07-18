import { useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Resume } from "./pages/Resume";
import { TechInfoContext } from "./context/techInfo";
import "./App.css";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showTech, setShowTech] = useState(
    () => searchParams.get("tech") === "on",
  );

  function toggleTech() {
    const next = !showTech;
    setShowTech(next);
    setSearchParams(
      (params) => {
        if (next) {
          params.set("tech", "on");
        } else {
          params.delete("tech");
        }
        return params;
      },
      { replace: true },
    );
  }

  return (
    <TechInfoContext.Provider value={{ showTech, toggleTech }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Ryan Gano</p>
      </footer>
    </TechInfoContext.Provider>
  );
}

export default App;
