export function LandingFooter() {
  return (
    <footer
      className="border-t border-[var(--card-border)] py-8"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="text-xs text-[var(--muted)]">
          &copy; {new Date().getFullYear()} Anicon &mdash; Open-source animated
          icons. Powered by{" "}
          <a
            href="https://motion.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted-foreground)] underline-offset-4 hover:text-white hover:underline"
          >
            Motion
          </a>
          .
        </p>
        <nav
          aria-label="Footer links"
          className="flex items-center gap-4 text-xs text-[var(--muted)]"
        >
          <a href="/icons" className="inline-flex min-h-[44px] items-center transition hover:text-white">
            Icons
          </a>
          <a
            href="https://github.com/gohelboy/anicon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center transition hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
