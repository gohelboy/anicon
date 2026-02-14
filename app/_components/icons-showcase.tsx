"use client";

import { iconsRegistry } from "@/app/_data/icons";

const MAX_LANDING_ICONS = 8;

export function IconsShowcase() {
  const icons = iconsRegistry.slice(0, MAX_LANDING_ICONS);

  return (
    <section
      id="icons"
      aria-labelledby="showcase-heading"
      className="scroll-mt-24 border-t border-[var(--card-border)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2
            id="showcase-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Icons in the registry
          </h2>
          <p className="mt-3 text-sm text-[var(--muted-foreground)] sm:text-base">
            Hover or tap to see Motion animations. Add any icon with one
            command.
          </p>
        </div>

        <div
          className="mt-8 gap-4 sm:mt-12 sm:gap-6"
          role="list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          }}
        >
          {icons.map(({ name, component: Icon, color }) => (
            <div
              key={name}
              role="listitem"
              className="icon-card flex flex-col items-center gap-4 rounded-none border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-8"
            >
              <div className="rounded-none border border-white/5 bg-black/20 p-6">
                <Icon size={56} className={color} aria-hidden="true" />
              </div>
              <div className="text-center">
                <code className="rounded bg-white/5 px-2 py-1 text-sm font-medium text-[var(--accent)]">
                  {name}
                </code>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-12">
          <a
            href="/icons"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-none border border-[var(--card-border)] bg-[var(--card)] px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-600"
          >
            Browse all icons &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
