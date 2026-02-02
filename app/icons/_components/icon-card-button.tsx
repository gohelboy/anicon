"use client";

import type { IconEntry } from "@/app/_data/icons";

export interface IconCardButtonProps {
  icon: IconEntry;
  iconColor: string;
  onClick: () => void;
}

export function IconCardButton({
  icon,
  iconColor,
  onClick,
}: IconCardButtonProps) {
  const IconComponent = icon.component;
  return (
    <button
      type="button"
      onClick={onClick}
      className="aspect-square flex items-center justify-center rounded-none border border-(--card-border) bg-(--card) p-3 transition hover:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-(--accent) focus:ring-offset-2 focus:ring-offset-(--background)"
    >
      <span style={{ color: iconColor }}>
        <IconComponent size={40} />
      </span>
    </button>
  );
}
