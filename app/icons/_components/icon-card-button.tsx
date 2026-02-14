"use client";

import { memo, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      title={shortName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${isHovered ? "scale-105" : "scale-100"} group relative aspect-square flex flex-col items-center justify-center gap-1 border border-[var(--card-border)] bg-[var(--surface)] p-2 transition hover:border-[var(--card-border-hover)] hover:bg-[var(--card)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 sm:p-3 ${iconColor}`}
    >
      <span
        style={{ color: iconColor }}
        className="flex items-center justify-center"
      >
        <IconComponent
          size={28}
          strokeWidth={strokeWidth}
          animate={isHovered ? "hover" : "rest"}
        />
      </span>
      {/* Tooltip on hover */}
      <span className="pointer-events-none text-center z-[100] absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap border border-[var(--card-border)] bg-[var(--card)] px-2 py-0.5 text-[10px] text-[var(--muted-foreground)] opacity-0 transition-opacity group-hover:opacity-100">
        {shortName}
      </span>
    </button>
  );
}

export const IconCardButton = memo(IconCardButtonComponent);
