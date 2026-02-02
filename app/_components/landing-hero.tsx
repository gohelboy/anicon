"use client";

import { IconHeart } from "@/registry/default/icon-heart/icon-heart";
import { IconSparkle } from "@/registry/default/icon-sparkle/icon-sparkle";

export function LandingHero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-24 pb-20">
      <div className="absolute inset-0 landing-bg" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
          Animated Icons Registry
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Install like shadcn.
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            Animate with Motion.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--muted-foreground)]">
          Drop animated SVG icons into your React app with one command. No npm
          icon packs—just copy the component and go.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#install"
            className="inline-flex items-center gap-2 rounded-none bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-yellow-500/25 transition hover:bg-yellow-400"
          >
            Get started
          </a>
          <a
            href="/icons"
            className="inline-flex items-center gap-2 rounded-none border border-[var(--card-border)] bg-[var(--card)] px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-600"
          >
            Browse icons
          </a>
        </div>
        {/* Floating icon preview */}
        <div className="mt-16 flex items-center justify-center gap-8">
          <div className="rounded-none border border-[var(--card-border)] bg-[var(--card)] p-6 icon-card">
            <IconHeart size={48} className="text-rose-500" />
          </div>
          <div className="rounded-none border border-[var(--card-border)] bg-[var(--card)] p-6 icon-card">
            <IconSparkle size={48} className="text-amber-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
