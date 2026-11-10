import { lazy, Suspense, useState } from "react";
import { Outlet, Route, Routes, useSearchParams } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Resume } from "./pages/Resume";
import { TechInfoContext } from "./context/techInfo";
import "./App.css";

// The redesign lives under /v2 and loads only when visited.
const V2App = lazy(() => import("./v2/V2App"));

function ClassicLayout() {
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
      <Outlet />
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Ryan Gano</p>
      </footer>
    </TechInfoContext.Provider>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/v2/*"
        element={
          <Suspense fallback={null}>
            <V2App />
          </Suspense>
        }
      />
      <Route element={<ClassicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
