"use client";

export interface EmptyIconsStateProps {
  onClearSearch: () => void;
}

export function EmptyIconsState({ onClearSearch }: EmptyIconsStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-none border border-dashed border-[var(--card-border)] bg-[var(--card)]/50 py-20 text-center">
      <div className="mb-4 rounded-none border border-[var(--card-border)] bg-black/20 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--muted-foreground)]"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <h2 className="text-lg font-bold text-white">No icons found</h2>
      <p className="mt-2 max-w-sm text-sm text-[var(--muted-foreground)]">
        Try a different search term or browse all icons by clearing the search.
      </p>
      <button
        type="button"
        onClick={onClearSearch}
        className="mt-4 rounded-none border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm font-bold text-zinc-900 transition hover:bg-yellow-400"
      >
        Clear search
      </button>
    </div>
  );
}
