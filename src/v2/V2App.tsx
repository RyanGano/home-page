import { useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ObfuscatedEmail } from "../components/ObfuscatedEmail";
import { resume } from "../data/resume";
import { Resume } from "../pages/Resume";
import { V2Home } from "./V2Home";
import { V2ProjectDetail } from "./V2ProjectDetail";
import "./v2.css";

const V2_TITLE = "Ryan Gano — Apps, games and tools";
const CURRENT_YEAR = new Date().getFullYear();

/** The redesigned site, served under /v2 next to the classic one so the two
 * can be compared. Everything it styles is scoped by the `v2` class this
 * component puts on <html>. */
export default function V2App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = V2_TITLE;
    document.documentElement.classList.add("v2");

    // A preview alongside the real site: keep it out of search results.
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.append(robots);

    return () => {
      document.title = previousTitle;
      document.documentElement.classList.remove("v2");
      robots.remove();
    };
  }, []);

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="v2-root">
      <header className="v2-header">
        <div className="v2-header-inner">
          <Link to="/v2" className="v2-brand">
            Ryan Gano
          </Link>
          <nav className="v2-nav" aria-label="Site">
            <Link to="/v2#projects">Projects</Link>
            <Link to="/v2#about">About</Link>
            <Link to="/v2/resume">Résumé</Link>
            <a href={resume.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <Routes>
        <Route index element={<V2Home />} />
        <Route path="resume" element={<Resume homePath="/v2" />} />
        <Route path="projects/:slug" element={<V2ProjectDetail />} />
        <Route path="*" element={<Navigate to="/v2" replace />} />
      </Routes>

      <footer className="v2-footer">
        <div className="v2-footer-inner">
          <span>&copy; {CURRENT_YEAR} Ryan Gano</span>
          <ObfuscatedEmail className="v2-link" />
          <Link to="/" className="v2-link">
            Classic site
          </Link>
        </div>
      </footer>
    </div>
  );
}
