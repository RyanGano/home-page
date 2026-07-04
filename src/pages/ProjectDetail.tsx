import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export function ProjectDetail() {
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

      <div className="project-detail-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

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

      <details className="project-detail-technical">
        <summary>Technical details</summary>
        <p>{project.technicalDescription}</p>
        <ul className="tech-list">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </details>
    </main>
  );
}
