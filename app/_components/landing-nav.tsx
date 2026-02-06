import Image from "next/image";

const GITHUB_REPO = "gohelboy/anicon";

async function getGithubStars(): Promise<number | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) return null;
    const data = (await response.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

export async function LandingNav() {
  const stars = await getGithubStars();
  const starsLabel = stars === null ? "GitHub stars" : `${stars.toLocaleString()} stars`;
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
            className="min-w-[44px] h-8 flex items-center justify-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            aria-label="Anicon GitHub stars"
          >
            <Image src="/images/github.webp" alt="GitHub" width={24} height={24} className="rounded-full" />
            <span>{starsLabel}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
