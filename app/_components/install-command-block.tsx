"use client";

import { useState } from "react";
import {
  installCommandsByPm,
  PACKAGE_MANAGERS,
  type PackageManager,
} from "@/lib/constants";

export interface InstallCommandBlockProps {
  commandUrl: string;
  className?: string;
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
      className={`overflow-hidden border border-[var(--card-border)] bg-[var(--surface)] ${className}`.trim()}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between gap-2 border-b border-[var(--card-border)] px-4 py-2.5">
        {/* Dots */}
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>

        {/* Package manager tabs */}
        <div className="flex items-center gap-0.5 border border-[var(--card-border)] bg-black/30 p-0.5">
          {PACKAGE_MANAGERS.map((pm) => (
            <button
              key={pm}
              type="button"
              onClick={() => setPackageManager(pm)}
              className={`px-2.5 py-1 text-xs font-medium transition ${
                packageManager === pm
                  ? "bg-[var(--accent)] text-zinc-900"
                  : "text-[var(--muted-foreground)] hover:text-white"
              }`}
            >
              {pm}
            </button>
          ))}
        </div>

        {/* Copy button */}
        <button
          type="button"
          onClick={copyToClipboard}
          className="flex h-7 w-7 items-center justify-center text-[var(--muted-foreground)] transition hover:text-white"
          aria-label="Copy command"
        >
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="14" height="14" x="8" y="8" rx="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          )}
        </button>
      </div>

      {/* Command */}
      <pre className="install-code overflow-x-auto px-4 py-4 text-sm leading-relaxed text-[var(--muted-foreground)] sm:px-6 sm:py-5">
        <code className="break-all">
          <span className="text-[var(--accent)] select-none">$ </span>
          {command}
        </code>
      </pre>

      {showFootnote && (
        <p className="border-t border-[var(--card-border)] px-4 py-3 text-xs text-[var(--muted)] sm:px-6">
          The CLI copies the component and adds{" "}
          <code className="bg-white/5 px-1 py-0.5">motion</code> if needed.
        </p>
      )}
    </div>
  );
}
