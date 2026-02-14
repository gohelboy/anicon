const GITHUB_REPO = "gohelboy/anicon";

export function LandingNav() {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-xl"
      role="banner"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight"
          aria-label="Anicon home"
        >
          <span className="text-[var(--accent)] text-lg">&#9670;</span>
          <span className="text-base text-white">Anicon</span>
        </a>

        {/* Nav links */}
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 sm:gap-2 text-sm text-[var(--muted-foreground)]"
        >
          <a
            href="/icons"
            className="relative px-3 py-2 transition-colors hover:text-white"
          >
            Icons
          </a>
          <a
            href="#install"
            className="relative px-3 py-2 transition-colors hover:text-white hidden sm:inline-flex"
          >
            Install
          </a>
          <span className="mx-1 h-4 w-px bg-[var(--card-border)] hidden sm:block" />
          <a
            href={`https://github.com/${GITHUB_REPO}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-[var(--card-border)] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[var(--muted-foreground)] transition hover:border-[var(--card-border-hover)] hover:text-white"
            aria-label="Anicon GitHub repository"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Star</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
