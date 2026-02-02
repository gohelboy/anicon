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

export interface IconDetailDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedIcon: IconEntry | null;
  iconColor: string;
}

export function IconDetailDrawer({
  open,
  onOpenChange,
  selectedIcon,
  iconColor,
}: IconDetailDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="border-[var(--card-border)] bg-[var(--card)] text-white">
        {selectedIcon && (
          <IconDetailContent icon={selectedIcon} iconColor={iconColor} />
        )}
      </DrawerContent>
    </Drawer>
  );
}

function IconDetailContent({
  icon,
  iconColor,
}: {
  icon: IconEntry;
  iconColor: string;
}) {
  const IconComponent = icon.component;
  const commandUrl = `${REGISTRY_BASE}/${icon.name}.json`;

  return (
    <div className="mx-auto max-w-2xl pb-8">
      <DrawerHeader>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex shrink-0 items-center justify-center rounded-none border border-[var(--card-border)] bg-black/20 p-4">
            <span style={{ color: iconColor }}>
              <IconComponent size={64} />
            </span>
          </div>
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <DrawerTitle className="text-xl text-white">
              <code className="text-[var(--accent)]">{icon.name}</code>
            </DrawerTitle>
            <DrawerDescription className="mt-2 text-[var(--muted-foreground)]">
              {icon.description}
            </DrawerDescription>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {icon.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-none border border-[var(--card-border)] bg-white/5 px-2 py-0.5 text-xs text-[var(--muted-foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DrawerHeader>
      <div className="mt-6">
        <InstallCommandBlock
          commandUrl={commandUrl}
          className="w-[42rem] max-w-full"
          showFootnote={true}
        />
      </div>
    </div>
  );
}
