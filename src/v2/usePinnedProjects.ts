import { useEffect, useState } from "react";
import { projects } from "../data/projects";

// Same key as the classic home page, so pins carry over between the two.
const PINNED_PROJECTS_STORAGE_KEY = "home-page:pinned-projects";

function readPinnedProjectSlugs(): string[] {
  try {
    const cachedPins = window.localStorage.getItem(PINNED_PROJECTS_STORAGE_KEY);
    if (!cachedPins) return [];

    const parsedPins: unknown = JSON.parse(cachedPins);
    if (!Array.isArray(parsedPins)) return [];

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

export function usePinnedProjects() {
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

  function togglePinned(slug: string) {
    setPinnedSlugs((prev) =>
      prev.includes(slug)
        ? prev.filter((pinnedSlug) => pinnedSlug !== slug)
        : [...prev, slug],
    );
  }

  return { pinnedSlugs, togglePinned };
}
