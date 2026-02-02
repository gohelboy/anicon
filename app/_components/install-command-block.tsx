"use client";

import { useState } from "react";
import {
  REGISTRY_BASE,
  installCommandsByPm,
  PACKAGE_MANAGERS,
  type PackageManager,
} from "@/lib/constants";

export interface InstallCommandBlockProps {
  /** Full registry item URL, e.g. `${REGISTRY_BASE}/icon-heart.json` */
  commandUrl: string;
  /** Optional fixed width class. Default: w-[42rem] max-w-full */
  className?: string;
  /** Show the "CLI copies..." footnote. Default true */
  showFootnote?: boolean;
}

export function InstallCommandBlock({
  commandUrl,
  className = "",
  showFootnote = true,
}: InstallCommandBlockProps) {
  const [packageManager, setPackageManager] =
    useState<PackageManager>("pnpm");
  const [copied, setCopied] = useState(false);

  const command = installCommandsByPm[packageManager](commandUrl);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`overflow-hidden rounded-none border border-[var(--card-border)] bg-[var(--card)] ${className}`.trim()}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--card-border)] px-3 py-2 sm:px-4 sm:py-3">
        <div className="flex items-center gap-2" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        </div>
        <div className="flex items-center gap-1 rounded-none border border-[var(--card-border)] bg-white/5 p-0.5">
          {PACKAGE_MANAGERS.map((pm) => (
            <button
              key={pm}
              type="button"
              onClick={() => setPackageManager(pm)}
              className={`min-h-[36px] rounded-none px-2 py-1.5 text-xs font-medium transition sm:min-h-[44px] sm:px-3 ${
                packageManager === pm
                  ? "bg-[var(--accent)] text-zinc-900"
                  : "text-[var(--muted-foreground)] hover:bg-white/10 hover:text-white"
              }`}
            >
              {pm}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copyToClipboard}
          className="min-h-[36px] rounded-none border border-[var(--card-border)] bg-white/5 px-2 py-1.5 text-xs font-medium text-[var(--muted-foreground)] transition hover:bg-white/10 hover:text-white sm:min-h-[44px] sm:px-3"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="install-code overflow-x-auto p-4 text-sm leading-relaxed text-[var(--muted-foreground)] sm:p-6">
        <code className="break-all">{command}</code>
      </pre>
      {showFootnote && (
        <p className="px-3 pb-4 pt-2 text-sm text-[var(--muted-foreground)] sm:px-4">
          The CLI copies the component and adds{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5">motion</code> if
          needed.
        </p>
      )}
    </div>
  );
}
