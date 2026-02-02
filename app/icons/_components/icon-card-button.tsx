"use client";

import { memo } from "react";
import type { IconEntry } from "@/app/_data/icons";

export interface IconCardButtonProps {
  icon: IconEntry;
  iconColor: string;
  onClick: () => void;
}

function IconCardButtonComponent({
  icon,
  iconColor,
  onClick,
}: IconCardButtonProps) {
  const IconComponent = icon.component;
  return (
    <button
      type="button"
      onClick={onClick}
      className="aspect-square flex items-center justify-center rounded-none border border-(--card-border) bg-(--card) p-2 transition hover:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-(--accent) focus:ring-offset-2 focus:ring-offset-(--background) sm:p-3"
    >
      <span
        style={{ color: iconColor }}
        className="flex items-center justify-center"
      >
        <IconComponent size={40} />
      </span>
    </button>
  );
}

export const IconCardButton = memo(IconCardButtonComponent);
