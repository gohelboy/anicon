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
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
      {/* Search */}
      <div className="relative flex-1 min-w-0">
        <span
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
          aria-hidden
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          type="search"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-10 border border-[var(--card-border)] bg-[var(--surface)] pl-9 pr-3 text-sm text-white placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30"
          aria-label="Search icons"
          autoComplete="off"
        />
      </div>

      {/* Controls row */}
      <div className="flex items-center gap-2">
        {/* Stroke slider */}
        <div className="flex h-10 shrink-0 items-center gap-2 border border-[var(--card-border)] bg-[var(--surface)] px-3">
          <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--muted)] whitespace-nowrap">
            Stroke
          </span>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={stroke}
            onChange={(e) => onStrokeChange(parseFloat(e.target.value))}
            className="h-0.5 w-16 cursor-pointer appearance-none bg-white/10 accent-[var(--accent)] sm:w-20"
          />
          <span className="w-5 text-right font-mono text-[10px] text-[var(--accent)]">
            {stroke.toFixed(1)}
          </span>
        </div>

        {/* Color picker */}
        <label
          title="Icon color"
          className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center overflow-hidden border border-[var(--card-border)] bg-[var(--surface)] hover:border-[var(--card-border-hover)] focus-within:ring-1 focus-within:ring-[var(--accent)]/30"
        >
          <input
            type="color"
            value={iconColor}
            onChange={(e) => onIconColorChange(e.target.value)}
            className="absolute inset-0 cursor-pointer opacity-0"
            aria-label="Icon color"
          />
          <span
            className="pointer-events-none h-5 w-5 border border-white/20"
            style={{ backgroundColor: iconColor }}
          />
        </label>
      </div>
    </div>
  );
}
