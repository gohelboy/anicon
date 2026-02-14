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

  const filteredIcons = iconsRegistry.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <LandingNav />

      <main className="pt-14">
        {/* Header */}
        <section className="border-b border-[var(--card-border)] px-5 pb-0 pt-10 sm:px-8 sm:pt-14">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-baseline gap-3">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Icons
              </h1>
              <span className="inline-flex items-center border border-[var(--card-border)] bg-[var(--surface)] px-2 py-0.5 text-xs font-medium text-[var(--muted-foreground)]">
                {iconsRegistry.length}
              </span>
            </div>
            <p className="mt-2 text-sm text-[var(--muted-foreground)] sm:text-base">
              Browse and search animated icons. Hover or tap to preview
              animations.
            </p>

            {/* Sticky search bar */}
            <div className="sticky top-14 z-40 -mx-5 bg-[var(--background)]/90 backdrop-blur-lg px-5 py-4 sm:-mx-8 sm:px-8">
              <IconsSearchBar
                search={search}
                onSearchChange={setSearch}
                iconColor={iconColor}
                onIconColorChange={setIconColor}
                stroke={stroke}
                onStrokeChange={setStroke}
              />
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-6xl">
            {filteredIcons.length > 0 ? (
              <>
                <p className="mb-4 text-xs text-[var(--muted)] sm:mb-5">
                  {filteredIcons.length} icon{filteredIcons.length !== 1 && "s"}
                  {search && (
                    <span>
                      {" "}matching &ldquo;
                      <span className="text-[var(--muted-foreground)]">{search}</span>
                      &rdquo;
                    </span>
                  )}
                </p>
                <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-5 sm:gap-3 md:grid-cols-7 lg:grid-cols-10">
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
