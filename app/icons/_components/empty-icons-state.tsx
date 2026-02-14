"use client";

export interface EmptyIconsStateProps {
  onClearSearch: () => void;
}

export function EmptyIconsState({ onClearSearch }: EmptyIconsStateProps) {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed border-[var(--card-border)] px-5 py-16 text-center sm:py-24">
      {/* Illustration */}
      <div className="mb-5 border border-[var(--card-border)] bg-[var(--surface)] p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--muted)]"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M8 11h6" />
        </svg>
      </div>

      <h2 className="text-base font-semibold text-white">No icons found</h2>
      <p className="mt-1.5 max-w-xs text-sm text-[var(--muted-foreground)]">
        Try a different search term, or clear the filter to browse all icons.
      </p>

      <button
        type="button"
        onClick={onClearSearch}
        className="mt-5 h-11 border border-[var(--accent)] bg-[var(--accent)] px-5 text-sm font-semibold text-zinc-900 transition hover:bg-[var(--accent-hover)]"
      >
        Clear search
      </button>
    </div>
  );
}
