import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  PROJECT_CATEGORIES,
  projects,
  type Project,
  type ProjectCategory,
} from "../data/projects";
import { SKILLS } from "./skills";
import { usePinnedProjects } from "./usePinnedProjects";
import { V2About } from "./V2About";
import { V2ProjectCard } from "./V2ProjectCard";

type CategoryFilter = ProjectCategory | "all";

interface ProjectGroup {
  id: string;
  label: string;
  projects: Project[];
}

function scrollToProjects() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  document
    .getElementById("projects")
    ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}

export function V2Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const { pinnedSlugs, togglePinned } = usePinnedProjects();

  const groups = useMemo<ProjectGroup[]>(() => {
    const needle = query.trim().toLowerCase();
    const skillTags = SKILLS.find((skill) => skill.label === activeSkill)?.tags;

    const matches = projects.filter((project) => {
      if (category !== "all" && project.category !== category) return false;
      if (skillTags && !project.tags.some((tag) => skillTags.includes(tag))) {
        return false;
      }
      if (!needle) return true;
      return [project.name, project.tagline].some((text) =>
        text.toLowerCase().includes(needle),
      );
    });

    const pinned = pinnedSlugs
      .map((slug) => matches.find((project) => project.slug === slug))
      .filter((project): project is Project => project !== undefined);

    return [
      { id: "pinned", label: "Pinned", projects: pinned },
      ...PROJECT_CATEGORIES.map((group) => ({
        id: group.id,
        label: group.label,
        projects: matches.filter(
          (project) =>
            project.category === group.id &&
            !pinnedSlugs.includes(project.slug),
        ),
      })),
    ].filter((group) => group.projects.length > 0);
  }, [query, category, activeSkill, pinnedSlugs]);

  const isFiltered =
    query.trim() !== "" || category !== "all" || activeSkill !== null;

  function clearFilters() {
    setQuery("");
    setCategory("all");
    setActiveSkill(null);
  }

  function selectSkill(label: string) {
    setActiveSkill((current) => (current === label ? null : label));
    setQuery("");
    setCategory("all");
    scrollToProjects();
  }

  return (
    <main className="v2-main">
      <section className="v2-intro">
        <p className="v2-eyebrow">Ryan Gano · Senior Software Engineer</p>
        <h1>Apps and games you can open right now.</h1>
        <p className="v2-intro-text">
          I build software for a living and for fun. These are the side
          projects: games, tabletop companions and a few useful tools. Pick one
          and open it, or read a little <Link to="/v2#about">about me</Link>.
        </p>
      </section>

      <section id="projects" className="v2-projects" aria-label="Projects">
        <div className="v2-toolbar">
          <input
            type="search"
            className="v2-search"
            placeholder="Find a project…"
            aria-label="Find a project"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="v2-chips" role="group" aria-label="Project type">
            <button
              type="button"
              className={`v2-chip${category === "all" ? " v2-chip-active" : ""}`}
              aria-pressed={category === "all"}
              onClick={() => setCategory("all")}
            >
              All
            </button>
            {PROJECT_CATEGORIES.map((group) => (
              <button
                key={group.id}
                type="button"
                className={`v2-chip${category === group.id ? " v2-chip-active" : ""}`}
                aria-pressed={category === group.id}
                onClick={() => setCategory(group.id)}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>

        {activeSkill && (
          <p className="v2-filter-note">
            Showing projects built with <strong>{activeSkill}</strong>.{" "}
            <button
              type="button"
              className="v2-text-button"
              onClick={clearFilters}
            >
              Show all
            </button>
          </p>
        )}

        {groups.map((group) => (
          <section
            key={group.id}
            className="v2-group"
            aria-labelledby={`v2-group-${group.id}`}
          >
            <h2 id={`v2-group-${group.id}`} className="v2-group-title">
              {group.label}
            </h2>
            <div className="v2-grid">
              {group.projects.map((project) => (
                <V2ProjectCard
                  key={project.slug}
                  project={project}
                  isPinned={pinnedSlugs.includes(project.slug)}
                  onTogglePin={() => togglePinned(project.slug)}
                />
              ))}
            </div>
          </section>
        ))}

        {groups.length === 0 && (
          <p className="v2-empty">
            No projects match.{" "}
            {isFiltered && (
              <button
                type="button"
                className="v2-text-button"
                onClick={clearFilters}
              >
                Show all
              </button>
            )}
          </p>
        )}
      </section>

      <V2About activeSkill={activeSkill} onSelectSkill={selectSkill} />
    </main>
  );
}
