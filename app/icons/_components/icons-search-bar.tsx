"use client";

export interface IconsSearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  iconColor: string;
  onIconColorChange: (value: string) => void;
}

export function IconsSearchBar({
  search,
  onSearchChange,
  iconColor,
  onIconColorChange,
}: IconsSearchBarProps) {
  return (
    <div className="mt-8 flex gap-2">
      <div className="relative flex-1">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          type="search"
          placeholder="Search icons by name, description, or tag..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-none border border-[var(--card-border)] bg-[var(--card)] py-3 pl-12 pr-4 text-white placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          aria-label="Search icons"
        />
        {search && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-none px-2 py-1 text-sm text-[var(--muted-foreground)] hover:text-white"
            aria-label="Clear search"
          >
            Clear
          </button>
        )}
      </div>
      <label
        title="Icon color"
        className="relative flex w-11 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-none border border-[var(--card-border)] bg-[var(--card)] hover:border-zinc-500 focus-within:ring-2 focus-within:ring-[var(--accent)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--background)]"
      >
        <input
          type="color"
          value={iconColor}
          onChange={(e) => onIconColorChange(e.target.value)}
          className="h-full w-full cursor-pointer opacity-0"
          aria-label="Icon color"
        />
        <span
          className="pointer-events-none absolute h-5 w-5 rounded-none border border-white/30"
          style={{ backgroundColor: iconColor }}
        />
      </label>
    </div>
  );
}
