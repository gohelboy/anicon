"use client";

import { InstallCommandBlock } from "./install-command-block";
import { REGISTRY_BASE } from "@/lib/constants";

const DEFAULT_ICON_URL = `${REGISTRY_BASE}/icon-heart.json`;

export function LandingInstall() {
  return (
    <section
      id="install"
      className="scroll-mt-24 border-t border-[var(--card-border)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            One command to add any icon
          </h2>
          <p className="mt-3 text-sm text-[var(--muted-foreground)] sm:text-base">
            From a project with shadcn and{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm">
              components.json
            </code>
            , run:
          </p>
        </div>
        <div className="mt-8 flex justify-center sm:mt-10">
          <InstallCommandBlock
            commandUrl={DEFAULT_ICON_URL}
            className="w-full max-w-[42rem]"
            showFootnote={false}
          />
        </div>
        <p className="mt-4 text-center text-sm text-[var(--muted-foreground)]">
          The CLI copies the component and adds{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5">motion</code> if
          needed.
        </p>
      </div>
    </section>
  );
}
