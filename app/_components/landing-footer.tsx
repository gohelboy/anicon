export function LandingFooter() {
  return (
    <footer className="border-t border-[var(--card-border)] py-8 sm:py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-center text-sm text-[var(--muted-foreground)] sm:text-left">
          Anicon — animated icons via shadcn registry. Powered by{" "}
          <a
            href="https://motion.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Motion
          </a>
          .
        </p>
        <div className="flex gap-4 sm:gap-6 text-sm text-[var(--muted-foreground)]">
          <a
            href="https://github.com/gohelboy/anicon"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
