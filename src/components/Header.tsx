import { useTechInfo } from "../context/techInfo";

export function Header() {
  const { showTech, toggleTech } = useTechInfo();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="/" className="site-title">
          Ryan Gano
        </a>
        <p className="site-subtitle">Software projects &amp; experiments</p>
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
      </div>
    </header>
  );
}
