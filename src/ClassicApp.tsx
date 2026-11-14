import { useEffect, useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Resume } from "./pages/Resume";
import { TechInfoContext } from "./context/techInfo";

const CLASSIC_TITLE = "Ryan Gano — Projects (classic)";
const CURRENT_YEAR = new Date().getFullYear();

/** The original site, kept under /v1 for comparison with the one that
 * replaced it at the root. */
export default function ClassicApp() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showTech, setShowTech] = useState(
    () => searchParams.get("tech") === "on",
  );

  useEffect(() => {
    const previousTitle = document.title;
    document.title = CLASSIC_TITLE;

    // An archived copy of the main site: keep it out of search results.
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.append(robots);

    return () => {
      document.title = previousTitle;
      robots.remove();
    };
  }, []);

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
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume homePath="/v1" />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/v1" replace />} />
      </Routes>
      <footer className="site-footer">
        <p>
          &copy; {CURRENT_YEAR} Ryan Gano ·{" "}
          <Link to="/">Back to the current site</Link>
        </p>
      </footer>
    </TechInfoContext.Provider>
  );
}
