export function LandingFooter() {
  return (
    <footer className="border-t border-[var(--card-border)] py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-[var(--muted-foreground)]">
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
        <div className="flex gap-6 text-sm text-[var(--muted-foreground)]">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
