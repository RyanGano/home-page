import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { TagFilter } from "../components/TagFilter";

export function Home() {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    for (const project of projects) {
      for (const tag of project.tags) {
        tagSet.add(tag);
      }
    }
    return Array.from(tagSet).sort();
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
        tags={allTags}
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
