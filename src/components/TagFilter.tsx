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
  return (
    <div className="tag-filter">
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
                  className={active ? "tag-chip tag-chip-active" : "tag-chip"}
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
  );
}
