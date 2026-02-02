"use client";

import { InstallCommandBlock } from "./install-command-block";
import { REGISTRY_BASE } from "@/lib/constants";

const DEFAULT_ICON_URL = `${REGISTRY_BASE}/icon-heart.json`;

export function LandingInstall() {
  return (
    <section
      id="install"
      className="scroll-mt-24 border-t border-[var(--card-border)] py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            One command to add any icon
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            From a project with shadcn and{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm">
              components.json
            </code>
            , run:
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <InstallCommandBlock
            commandUrl={DEFAULT_ICON_URL}
            className="w-[42rem] max-w-full"
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
