"use client";

const GITHUB_REPO = "gohelboy/anicon";

export function LandingNavClient() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="/"
          className="flex min-h-[44px] min-w-[44px] items-center gap-2 font-bold tracking-tight"
          aria-label="Anicon home"
        >
          <span className="text-lg text-white sm:text-xl">Anicon</span>
        </a>
        <nav className="flex items-center gap-2 sm:gap-6 text-sm font-bold text-[var(--muted-foreground)]">
          <a
            href="/icons"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center px-2 transition hover:text-white"
          >
            Icons
          </a>
          <a
            href="#install"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center px-2 transition hover:text-white"
          >
            Install
          </a>
          <a
            href={`https://github.com/${GITHUB_REPO}`}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            aria-label="Anicon GitHub repository"
          >
            <span aria-hidden="true">★</span>
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
