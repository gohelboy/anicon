"use client";

import { memo } from "react";
import type { IconEntry } from "@/app/_data/icons";

export interface IconCardButtonProps {
  icon: IconEntry;
  iconColor: string;
  strokeWidth: number;
  onClick: () => void;
}

function IconCardButtonComponent({
  icon,
  iconColor,
  strokeWidth,
  onClick,
}: IconCardButtonProps) {
  const IconComponent = icon.component;
  const shortName = icon.name.replace("icon-", "");

  return (
    <button
      type="button"
      onClick={onClick}
      title={shortName}
      className="group relative aspect-square flex flex-col items-center justify-center gap-1 border border-[var(--card-border)] bg-[var(--surface)] p-2 transition hover:border-[var(--card-border-hover)] hover:bg-[var(--card)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 sm:p-3"
    >
      <span
        style={{ color: iconColor }}
        className="flex items-center justify-center transition-transform group-hover:scale-110"
      >
        <IconComponent size={28} strokeWidth={strokeWidth} />
      </span>
      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap border border-[var(--card-border)] bg-[var(--card)] px-2 py-0.5 text-[10px] text-[var(--muted-foreground)] opacity-0 transition-opacity group-hover:opacity-100 z-10">
        {shortName}
      </span>
    </button>
  );
}

export const IconCardButton = memo(IconCardButtonComponent);
