import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

interface V2ProjectCardProps {
  project: Project;
  isPinned: boolean;
  onTogglePin: () => void;
}

export function V2ProjectCard({
  project,
  isPinned,
  onTogglePin,
}: V2ProjectCardProps) {
  const detailUrl = `/v2/projects/${project.slug}`;
  const liveUrl = project.links.live;

  const shot = project.screenshot ? (
    <img
      src={project.screenshot}
      alt=""
      loading="lazy"
      width={900}
      height={1200}
    />
  ) : (
    <span className="v2-card-shot-empty">{project.name}</span>
  );

  return (
    <article className="v2-card">
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="v2-card-shot"
          tabIndex={-1}
          aria-hidden="true"
        >
          {shot}
        </a>
      ) : (
        <Link
          to={detailUrl}
          className="v2-card-shot"
          tabIndex={-1}
          aria-hidden="true"
        >
          {shot}
        </Link>
      )}

      <div className="v2-card-body">
        <h3>
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          ) : (
            <Link to={detailUrl}>{project.name}</Link>
          )}
        </h3>
        <p className="v2-card-tagline">{project.tagline}</p>

        <div className="v2-card-actions">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn v2-btn-primary v2-btn-small"
              aria-label={`Open ${project.name}`}
            >
              Open <span aria-hidden="true">↗</span>
            </a>
          )}
          <Link
            to={detailUrl}
            className="v2-link"
            aria-label={`Details about ${project.name}`}
          >
            Details
          </Link>
          <button
            type="button"
            className={`v2-pin${isPinned ? " v2-pin-active" : ""}`}
            onClick={onTogglePin}
            aria-label={`${isPinned ? "Unpin" : "Pin"} ${project.name}${isPinned ? "" : " to top"}`}
            aria-pressed={isPinned}
            title={isPinned ? "Unpin" : "Pin to top"}
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
        </div>
      </div>
    </article>
  );
}
