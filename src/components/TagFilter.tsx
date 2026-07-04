interface TagFilterProps {
  tags: string[];
  activeTags: Set<string>;
  onToggle: (tag: string) => void;
  onClear: () => void;
}

export function TagFilter({ tags, activeTags, onToggle, onClear }: TagFilterProps) {
  return (
    <div className="tag-filter">
      <div className="tag-filter-list">
        {tags.map((tag) => {
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
      {activeTags.size > 0 && (
        <button type="button" className="tag-clear" onClick={onClear}>
          Clear filters ({activeTags.size})
        </button>
      )}
    </div>
  );
}
