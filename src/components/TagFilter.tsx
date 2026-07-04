import { useState } from "react";
import type { TagGroup } from "../data/tagGroups";

interface TagFilterProps {
  groups: TagGroup[];
  activeTags: Set<string>;
  onToggle: (tag: string) => void;
  onClear: () => void;
}

export function TagFilter({
  groups,
  activeTags,
  onToggle,
  onClear,
}: TagFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tag-filter">
      <button
        type="button"
        className="tag-filter-toggle"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>Filter by tag</span>
        {activeTags.size > 0 && (
          <span className="tag-filter-count">{activeTags.size}</span>
        )}
        <span
          className={isOpen ? "tag-filter-chevron open" : "tag-filter-chevron"}
        >
          ▾
        </span>
      </button>

      {!isOpen && activeTags.size > 0 && (
        <div className="tag-filter-summary">
          {Array.from(activeTags).map((tag) => (
            <button
              key={tag}
              type="button"
              className="tag-chip tag-chip-active"
              onClick={() => onToggle(tag)}
            >
              {tag}
            </button>
          ))}
          <button type="button" className="tag-clear" onClick={onClear}>
            Clear
          </button>
        </div>
      )}

      {isOpen && (
        <div className="tag-filter-panel">
          {groups.map((group) => (
            <div className="tag-filter-group" key={group.label}>
              <span className="tag-filter-group-label">{group.label}</span>
              <div className="tag-filter-list">
                {group.tags.map((tag) => {
                  const active = activeTags.has(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      className={
                        active ? "tag-chip tag-chip-active" : "tag-chip"
                      }
                      aria-pressed={active}
                      onClick={() => onToggle(tag)}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          {activeTags.size > 0 && (
            <button type="button" className="tag-clear" onClick={onClear}>
              Clear filters ({activeTags.size})
            </button>
          )}
        </div>
      )}
    </div>
  );
}
