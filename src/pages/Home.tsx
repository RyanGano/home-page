import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import { TAG_GROUPS } from "../data/tagGroups";
import { ProjectCard } from "../components/ProjectCard";
import { TagFilter } from "../components/TagFilter";

export function Home() {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

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
    if (activeTags.size === 0) return projects;
    return projects.filter((project) => project.tags.some((tag) => activeTags.has(tag)));
  }, [activeTags]);

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

  return (
    <main className="home">
      <section className="intro">
        <h1>A directory of things I&apos;ve built</h1>
        <p>
          Full-stack apps, tools, and experiments spanning React, .NET, Azure, and AI.
          Filter by tag to find what interests you, or browse everything below.
        </p>
      </section>

      <TagFilter
        groups={tagGroups}
        activeTags={activeTags}
        onToggle={toggleTag}
        onClear={() => setActiveTags(new Set())}
      />

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className="empty-state">No projects match the selected tags.</p>
      )}
    </main>
  );
}
