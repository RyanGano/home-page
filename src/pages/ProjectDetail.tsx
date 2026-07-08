import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useTechInfo } from "../context/techInfo";

export function ProjectDetail() {
  const { showTech } = useTechInfo();
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="project-detail">
      <Link to="/" className="back-link">
        &larr; All projects
      </Link>

      <h1>{project.name}</h1>
      <p className="project-detail-tagline">{project.tagline}</p>

      {showTech && (
        <div className="project-detail-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="project-detail-links">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View live site
          </a>
        )}
        {project.links.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            View source on GitHub
          </a>
        )}
      </div>

      <section className="project-detail-section project-detail-about">
        <h2>What is it?</h2>
        <p>{project.description}</p>
      </section>

      {project.relatedGames && project.relatedGames.length > 0 && (
        <section className="project-detail-section project-detail-games">
          <h2>Get the game</h2>
          <p>
            This is a companion app for a physical tabletop game. Grab a copy on
            Amazon:
          </p>
          <ul className="related-games-list">
            {project.relatedGames.map((game) => (
              <li key={game.name}>
                <a href={game.amazonUrl} target="_blank" rel="noreferrer">
                  {game.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="affiliate-disclosure">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </section>
      )}

      {showTech && (
        <details className="project-detail-technical">
          <summary>Technical details</summary>
          <p>{project.technicalDescription}</p>
          <ul className="tech-list">
            {project.techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </details>
      )}
    </main>
  );
}
