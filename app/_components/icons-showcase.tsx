"use client";

import { iconsRegistry } from "@/app/_data/icons";

export function IconsShowcase() {
  return (
    <section
      id="icons"
      className="scroll-mt-24 border-t border-[var(--card-border)] py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Icons in the registry
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            Hover or tap to see Motion animations. Add any icon with one
            command.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {iconsRegistry.map(({ name, component: Icon, color, description }) => (
            <div
              key={name}
              className="icon-card flex flex-col items-center gap-4 rounded-none border border-[var(--card-border)] bg-[var(--card)] p-8"
            >
              <div className="rounded-none border border-white/5 bg-black/20 p-6">
                <Icon size={56} className={color} />
              </div>
              <div className="text-center">
                <code className="rounded bg-white/5 px-2 py-1 text-sm font-medium text-[var(--accent)]">
                  {name}
                </code>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
