import { useEffect, useMemo, useState } from "react";
import { projects } from "../data/projects";
import { TAG_GROUPS } from "../data/tagGroups";
import { ProjectCard } from "../components/ProjectCard";
import { TagFilter } from "../components/TagFilter";
import { useTechInfo } from "../context/techInfo";

const PINNED_PROJECTS_STORAGE_KEY = "home-page:pinned-projects";

function readPinnedProjectSlugs() {
  try {
    const cachedPins = window.localStorage.getItem(PINNED_PROJECTS_STORAGE_KEY);
    if (!cachedPins) return [];

    const parsedPins: unknown = JSON.parse(cachedPins);
    if (!Array.isArray(parsedPins)) {
      throw new TypeError("Saved pinned projects must be an array.");
    }

    const knownSlugs = new Set(projects.map((project) => project.slug));
    return [
      ...new Set(
        parsedPins.filter(
          (slug): slug is string =>
            typeof slug === "string" && knownSlugs.has(slug),
        ),
      ),
    ];
  } catch (error) {
    console.error("Could not load pinned projects from local storage.", error);
    return [];
  }
}

export function Home() {
  const { showTech } = useTechInfo();
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [pinnedSlugs, setPinnedSlugs] = useState(readPinnedProjectSlugs);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        PINNED_PROJECTS_STORAGE_KEY,
        JSON.stringify(pinnedSlugs),
      );
    } catch (error) {
      console.error("Could not save pinned projects to local storage.", error);
    }
  }, [pinnedSlugs]);

  const tagGroups = useMemo(() => {
    const present = new Set<string>();
    for (const project of projects) {
      for (const tag of project.tags) {
        present.add(tag);
      }
    }

    const used = new Set<string>();
    const grouped = TAG_GROUPS.map((group) => ({
      label: group.label,
      tags: group.tags.filter((tag) => present.has(tag)),
    })).filter((group) => group.tags.length > 0);
    grouped.forEach((group) => group.tags.forEach((tag) => used.add(tag)));

    const leftover = Array.from(present)
      .filter((tag) => !used.has(tag))
      .sort();
    if (leftover.length > 0) {
      grouped.push({ label: "Other", tags: leftover });
    }

    return grouped;
  }, []);

  const visibleProjects = useMemo(() => {
    const filteredProjects =
      !showTech || activeTags.size === 0
        ? projects
        : projects.filter((project) =>
            project.tags.some((tag) => activeTags.has(tag)),
          );
    const pinOrder = new Map(pinnedSlugs.map((slug, index) => [slug, index]));

    return [...filteredProjects].sort((left, right) => {
      const leftOrder = pinOrder.get(left.slug);
      const rightOrder = pinOrder.get(right.slug);
      if (leftOrder !== undefined && rightOrder !== undefined) {
        return leftOrder - rightOrder;
      }
      if (leftOrder !== undefined) return -1;
      if (rightOrder !== undefined) return 1;
      return 0;
    });
  }, [activeTags, pinnedSlugs, showTech]);

  function toggleTag(tag: string) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  }

  function togglePinnedProject(slug: string) {
    setPinnedSlugs((prev) =>
      prev.includes(slug)
        ? prev.filter((pinnedSlug) => pinnedSlug !== slug)
        : [...prev, slug],
    );
  }

  return (
    <main className="home">
      <section className="intro">
        <h1>A directory of things I&apos;ve built</h1>
        <p>
          Full-stack apps, tools, and experiments spanning React, .NET, Azure,
          and AI.{" "}
          {showTech
            ? "Filter by tag to find what interests you, or browse everything below."
            : "Browse everything below."}
        </p>
      </section>

      {showTech && (
        <TagFilter
          groups={tagGroups}
          activeTags={activeTags}
          onToggle={toggleTag}
          onClear={() => setActiveTags(new Set())}
        />
      )}

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            isPinned={pinnedSlugs.includes(project.slug)}
            onTogglePin={() => togglePinnedProject(project.slug)}
          />
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className="empty-state">No projects match the selected tags.</p>
      )}
    </main>
  );
}
