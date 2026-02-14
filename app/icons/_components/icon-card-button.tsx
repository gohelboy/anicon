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
      className={`${isHovered ? "scale-105 sm:scale-110" : "scale-100"} group relative aspect-square flex flex-col items-center justify-center gap-1 border border-(--card-border) bg-(--surface) p-2 transition hover:border-(--card-border-hover) focus:outline-none focus:ring-1 focus:ring-(--accent)/30 sm:p-3 min-h-[48px] min-w-[48px]`}
    >
      <span
        style={{ color: iconColor }}
        className="flex items-center justify-center"
      >
        <IconComponent
          size={isHovered ? 32 : 28}
          strokeWidth={strokeWidth}
          animate={isHovered ? "hover" : "rest"}
        />
      </span>
      {/* Tooltip — positioned above the card so it never gets clipped */}
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap border border-(--card-border) bg-(--card) px-2 py-1 text-[11px] text-(--muted-foreground) opacity-0 transition-opacity group-hover:opacity-100 z-50 shadow-lg sm:text-xs">
        {shortName}
      </span>
    </button>
  );
}

export const IconCardButton = memo(IconCardButtonComponent);
