"use client";

export interface IconsSearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  iconColor: string;
  onIconColorChange: (value: string) => void;
  stroke: number;
  onStrokeChange: (value: number) => void;
}

export function IconsSearchBar({
  search,
  onSearchChange,
  iconColor,
  onIconColorChange,
  stroke,
  onStrokeChange,
}: IconsSearchBarProps) {
  return (
    <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-2">
      <div className="relative flex-1 min-w-0">
        <span
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] sm:left-4"
          aria-hidden
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          type="search"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full min-h-[44px] rounded-none border border-[var(--card-border)] bg-[var(--card)] py-3 pl-10 pr-10 text-base text-white placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] sm:pl-12 sm:pr-12"
          aria-label="Search icons"
          autoComplete="off"
        />
      </div>

      <div className="flex min-h-[44px] shrink-0 items-center gap-2 rounded-none border border-[var(--card-border)] bg-[var(--card)] px-3 py-1.5">
        <span className="text-xs font-medium text-white/50 whitespace-nowrap">Stroke</span>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={stroke}
          onChange={(e) => onStrokeChange(parseFloat(e.target.value))}
          className="h-1 w-20 sm:w-24 cursor-pointer appearance-none rounded-full bg-white/10 accent-[var(--accent)] hover:bg-white/20 focus:outline-none"
        />
        <span className="w-6 text-right font-mono text-xs text-[var(--accent)]">
          {stroke.toFixed(1)}
        </span>
      </div>

      <label
        title="Icon color"
        className="relative flex min-h-[44px] w-11 min-w-[44px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-none border border-[var(--card-border)] bg-[var(--card)] hover:border-zinc-500 focus-within:ring-2 focus-within:ring-[var(--accent)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--background)]"
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
