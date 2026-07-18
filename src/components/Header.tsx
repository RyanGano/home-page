import { Link } from "react-router-dom";
import { useTechInfo } from "../context/techInfo";
import { ObfuscatedEmail } from "./ObfuscatedEmail";

export function Header() {
  const { showTech, toggleTech } = useTechInfo();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="/" className="site-title">
          Ryan Gano
        </a>
        <p className="site-subtitle">Software projects &amp; experiments</p>
        <nav className="site-header-nav">
          <Link to="/resume" className="site-header-link">
            Résumé
          </Link>
          <ObfuscatedEmail className="site-header-link site-header-email" />
          <button
            type="button"
            className="tech-toggle"
            aria-pressed={showTech}
            onClick={toggleTech}
          >
            <span className="tech-toggle-track" aria-hidden="true">
              <span className="tech-toggle-thumb" />
            </span>
            Technical info
          </button>
        </nav>
      </div>
    </header>
  );
}
