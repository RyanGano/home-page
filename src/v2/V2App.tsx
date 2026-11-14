import { useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ObfuscatedEmail } from "../components/ObfuscatedEmail";
import { resume } from "../data/resume";
import { Resume } from "../pages/Resume";
import { V2Home } from "./V2Home";
import { V2ProjectDetail } from "./V2ProjectDetail";
import "./v2.css";

const CURRENT_YEAR = new Date().getFullYear();

/** The site was previewed under /v2 before it replaced the classic one, so
 * links shared from that time still need to land on the same page. */
function LegacyV2Redirect() {
  const { pathname, search, hash } = useLocation();
  const path = pathname.replace(/^\/v2/, "") || "/";
  return <Navigate to={`${path}${search}${hash}`} replace />;
}

/** The main site, served at the root. The classic site it replaced lives on
 * under /v1 (see ClassicApp). Everything this styles is scoped by the `v2`
 * class this component puts on <html>. */
export default function V2App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("v2");
    return () => document.documentElement.classList.remove("v2");
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
          <Link to="/" className="v2-brand">
            Ryan Gano
          </Link>
          <nav className="v2-nav" aria-label="Site">
            <Link to="/#projects">Projects</Link>
            <Link to="/#about">About</Link>
            <Link to="/resume">Résumé</Link>
            <a href={resume.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <Routes>
        <Route index element={<V2Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects/:slug" element={<V2ProjectDetail />} />
        <Route path="v2/*" element={<LegacyV2Redirect />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="v2-footer">
        <div className="v2-footer-inner">
          <span>&copy; {CURRENT_YEAR} Ryan Gano</span>
          <ObfuscatedEmail className="v2-link" />
          <Link to="/v1" className="v2-link">
            Classic site
          </Link>
        </div>
      </footer>
    </div>
  );
}
