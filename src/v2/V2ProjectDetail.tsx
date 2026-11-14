import { Link, Navigate, useParams } from "react-router-dom";
import { PROJECT_CATEGORIES, projects } from "../data/projects";

export function V2ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const categoryLabel = PROJECT_CATEGORIES.find(
    (group) => group.id === project.category,
  )?.label;

  return (
    <main className="v2-main v2-detail">
      <Link to="/" className="v2-link v2-back">
        ← All projects
      </Link>

      <div className="v2-detail-top">
        <div>
          <p className="v2-eyebrow">
            {categoryLabel} · {project.year}
          </p>
          <h1>{project.name}</h1>
          <p className="v2-detail-tagline">{project.tagline}</p>

          <div className="v2-detail-actions">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-btn v2-btn-primary"
              >
                Open {project.name} <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-btn v2-btn-secondary"
              >
                Source on GitHub
              </a>
            )}
          </div>

          <section className="v2-detail-section">
            <h2>What is it?</h2>
            <p>{project.description}</p>
          </section>
        </div>
        {project.screenshot && (
          <img
            className="v2-detail-shot"
            src={project.screenshot}
            alt={`Screenshot of ${project.name}`}
            width={900}
            height={1200}
          />
        )}
      </div>

      {project.relatedGames && project.relatedGames.length > 0 && (
        <section className="v2-detail-section">
          <h2>Get the game</h2>
          <p>
            This is a companion app for a physical tabletop game. Grab a copy on
            Amazon:
          </p>
          <ul>
            {project.relatedGames.map((game) => (
              <li key={game.name}>
                <a
                  href={game.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {game.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="v2-fine-print">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </section>
      )}

      <section className="v2-detail-section v2-detail-tech">
        <h2>How it&apos;s built</h2>
        <p>{project.technicalDescription}</p>
        <ul className="v2-stack">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
