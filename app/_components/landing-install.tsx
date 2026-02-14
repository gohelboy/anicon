"use client";

import { InstallCommandBlock } from "./install-command-block";
import { REGISTRY_BASE } from "@/lib/constants";

const DEFAULT_ICON_URL = `${REGISTRY_BASE}/icon-heart.json`;

const STEPS = [
  {
    num: "1",
    title: "Init shadcn",
    description: "Set up shadcn in your React / Next.js project.",
  },
  {
    num: "2",
    title: "Run the CLI",
    description: "Pick an icon and run the install command.",
  },
  {
    num: "3",
    title: "Use the component",
    description: "Import and drop the animated icon into your JSX.",
  },
];

export function LandingInstall() {
  return (
    <section
      id="install"
      className="scroll-mt-24 border-t border-[var(--card-border)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left: heading + steps */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              One command to add any icon
            </h2>
            <p className="mt-3 text-sm text-[var(--muted-foreground)] sm:text-base max-w-md">
              Works with any project that has shadcn and{" "}
              <code className="bg-white/5 px-1.5 py-0.5 text-xs">
                components.json
              </code>
              .
            </p>

            {/* Steps */}
            <div className="mt-8 flex flex-col gap-5 sm:mt-10">
              {STEPS.map(({ num, title, description }) => (
                <div key={num} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[var(--card-border)] bg-[var(--surface)] text-xs font-bold text-[var(--accent)]">
                    {num}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">{title}</p>
                    <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: terminal */}
          <div className="lg:pt-2">
            <InstallCommandBlock
              commandUrl={DEFAULT_ICON_URL}
              className="w-full"
              showFootnote
            />
          </div>
        </div>
      </div>
    </section>
  );
}
