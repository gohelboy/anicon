"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { InstallCommandBlock } from "@/app/_components/install-command-block";
import { REGISTRY_BASE } from "@/lib/constants";
import type { IconEntry } from "@/app/_data/icons";
import { useState } from "react";

export interface IconDetailDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedIcon: IconEntry | null;
  iconColor: string;
  strokeWidth: number;
}

export function IconDetailDrawer({
  open,
  onOpenChange,
  selectedIcon,
  iconColor,
  strokeWidth,
}: IconDetailDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="border-[var(--card-border)] bg-[var(--background)] text-white">
        {selectedIcon && (
          <IconDetailContent
            icon={selectedIcon}
            iconColor={iconColor}
            strokeWidth={strokeWidth}
          />
        )}
      </DrawerContent>
    </Drawer>
  );
}

function IconDetailContent({
  icon,
  iconColor,
  strokeWidth,
}: {
  icon: IconEntry;
  iconColor: string;
  strokeWidth: number;
}) {
  const IconComponent = icon.component;
  const commandUrl = `${REGISTRY_BASE}/${icon.name}.json`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mx-auto w-full max-w-2xl px-5 pb-8 sm:px-8"
      style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
    >
      <DrawerHeader className="px-0">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-6">
          {/* Icon preview */}
          <div
            className="flex shrink-0 items-center justify-center border border-[var(--card-border)] bg-[var(--surface)] p-5 sm:p-6 cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span style={{ color: iconColor }}>
              <IconComponent
                size={64}
                strokeWidth={strokeWidth}
                animate={isHovered ? "hover" : "rest"}
              />
            </span>
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <DrawerTitle className="text-lg text-white sm:text-xl">
              <code className="text-[var(--accent)] break-all">{icon.name}</code>
            </DrawerTitle>
            <DrawerDescription className="mt-2 text-sm text-[var(--muted-foreground)]">
              {icon.description}
            </DrawerDescription>
            {/* Tags */}
            <div className="mt-3 flex flex-wrap justify-center gap-1.5 sm:justify-start">
              {icon.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[var(--card-border)] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-[var(--muted-foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DrawerHeader>

      {/* Install command */}
      <div className="mt-5 sm:mt-6">
        <InstallCommandBlock
          commandUrl={commandUrl}
          className="w-full"
          showFootnote
        />
      </div>
    </div>
  );
}
