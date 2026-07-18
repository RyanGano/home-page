import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { useTechInfo } from "../context/techInfo";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { showTech } = useTechInfo();
  const detailUrl = `/projects/${project.slug}`;
  const liveUrl = project.links.live;

  return (
    <div className={`project-card${showTech ? "" : " project-card-compact"}`}>
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-main-link"
          aria-label={`Open ${project.name}`}
        >
          <h3>{project.name}</h3>
          <p className="project-card-tagline">{project.tagline}</p>
        </a>
      ) : (
        <Link to={detailUrl} className="project-card-main-link">
          <h3>{project.name}</h3>
          <p className="project-card-tagline">{project.tagline}</p>
        </Link>
      )}
      {showTech && (
        <div className="project-card-tags">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="tag-pill tag-pill-more">
              +{project.tags.length - 5}
            </span>
          )}
        </div>
      )}
      {liveUrl && (
        <Link to={detailUrl} className="project-card-more-info">
          More info →
        </Link>
      )}
    </div>
  );
}
