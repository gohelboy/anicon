"use client";

import { useState } from "react";
import { LandingNav } from "../_components/landing-nav";
import type { IconEntry } from "../_data/icons";
import { iconsRegistry } from "../_data/icons";
import { EmptyIconsState } from "./_components/empty-icons-state";
import { IconCardButton } from "./_components/icon-card-button";
import { IconDetailDrawer } from "./_components/icon-detail-drawer";
import { IconsSearchBar } from "./_components/icons-search-bar";

export default function IconsPage() {
  const [search, setSearch] = useState("");
  const [iconColor, setIconColor] = useState("#ffffff");
  const [stroke, setStroke] = useState(1.5);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<IconEntry | null>(null);

  const openIconDetail = (icon: IconEntry) => {
    setSelectedIcon(icon);
    setDrawerOpen(true);
  };

  const filteredIcons = iconsRegistry.filter((icon) => {
    return icon.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen">
      <LandingNav />
      <main className="pt-24 pb-16 sm:pb-20">
        <section className="border-b border-(--card-border) px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-4xl pt-8">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Icons
            </h1>
            <p className="mt-2 text-base text-(--muted-foreground) sm:mt-3 sm:text-lg">
              Browse and search animated icons. Hover or tap to see Motion animations.
            </p>
            <IconsSearchBar
              search={search}
              onSearchChange={setSearch}
              iconColor={iconColor}
              onIconColorChange={setIconColor}
              stroke={stroke}
              onStrokeChange={setStroke}
            />
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-6xl">
            {filteredIcons.length > 0 ? (
              <>
                <p className="mb-4 text-sm text-(--muted-foreground) sm:mb-6">
                  {filteredIcons.length} icons
                </p>
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-10">
                  {filteredIcons.map((icon) => (
                    <IconCardButton
                      key={icon.name}
                      icon={icon}
                      iconColor={iconColor}
                      strokeWidth={stroke}
                      onClick={() => openIconDetail(icon)}
                    />
                  ))}
                </div>
                <IconDetailDrawer
                  open={drawerOpen}
                  onOpenChange={setDrawerOpen}
                  selectedIcon={selectedIcon}
                  iconColor={iconColor}
                  strokeWidth={stroke}
                />
              </>
            ) : (
              <EmptyIconsState onClearSearch={() => setSearch("")} />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
