"use client";

import { useState } from "react";
import { iconsRegistry } from "@/app/_data/icons";

const MAX_LANDING_ICONS = 12;

function ShowcaseCard({
  name,
  component: Icon,
  color,
}: {
  name: string;
  component: React.ComponentType<any>;
  color: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="listitem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="icon-card group flex flex-col items-center gap-3 border border-[var(--card-border)] bg-[var(--surface)] p-4 sm:p-5 cursor-default"
    >
      <div className="flex items-center justify-center">
        <Icon
          size={36}
          className={color}
          aria-hidden="true"
          animate={isHovered ? "hover" : "rest"}
        />
      </div>
      <code className="truncate max-w-full text-[11px] font-medium text-[var(--muted-foreground)] group-hover:text-[var(--accent)] transition-colors sm:text-xs">
        {name.replace("icon-", "")}
      </code>
    </div>
  );
}

export function IconsShowcase() {
  const icons = iconsRegistry.slice(0, MAX_LANDING_ICONS);

  return (
    <section
      id="icons"
      aria-labelledby="showcase-heading"
      className="scroll-mt-24 border-t border-[var(--card-border)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="showcase-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Icons in the registry
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)] sm:text-base">
              Hover or tap to preview animations. Install any icon with one
              command.
            </p>
          </div>
          <a
            href="/icons"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-hover)]"
          >
            View all icons
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
        </div>

        {/* Icon grid */}
        <div
          className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6"
          role="list"
        >
          {icons.map(({ name, component, color }) => (
            <ShowcaseCard
              key={name}
              name={name}
              component={component}
              color={color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
