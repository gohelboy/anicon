"use client";

import { useMemo } from "react";
import { iconsRegistry } from "@/app/_data/icons";
import type { IconEntry } from "@/app/_data/icons";

export function useFilteredIcons(search: string): IconEntry[] {
  return useMemo(() => {
    if (!search.trim()) return [...iconsRegistry];
    const q = search.trim().toLowerCase();
    return iconsRegistry.filter(
      (icon) =>
        icon.name.toLowerCase().includes(q) ||
        icon.description.toLowerCase().includes(q) ||
        icon.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [search]);
}
