import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { useTechInfo } from "../context/techInfo";

interface ProjectCardProps {
  project: Project;
  isPinned: boolean;
  onTogglePin: () => void;
}

export function ProjectCard({
  project,
  isPinned,
  onTogglePin,
}: ProjectCardProps) {
  const { showTech } = useTechInfo();
  const detailUrl = `/projects/${project.slug}`;
  const liveUrl = project.links.live;

  return (
    <div className={`project-card${showTech ? "" : " project-card-compact"}`}>
      <button
        type="button"
        className={`project-card-pin${isPinned ? " project-card-pin-active" : ""}`}
        onClick={onTogglePin}
        aria-label={`${isPinned ? "Unpin" : "Pin"} ${project.name}${isPinned ? "" : " to top"}`}
        aria-pressed={isPinned}
        title={`${isPinned ? "Unpin" : "Pin"} ${project.name}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill={isPinned ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m16 3 5 5-4 1-4 4v5l-2 2-2-7-7-2 2-2h5l4-4 1-4z" />
          <path d="m9 15-5 5" />
        </svg>
      </button>
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
