import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { useTechInfo } from "../context/techInfo";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { showTech } = useTechInfo();

  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <h3>{project.name}</h3>
      <p className="project-card-tagline">{project.tagline}</p>
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
    </Link>
  );
}
