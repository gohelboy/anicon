"use client";

import { useState } from "react";
import { IconHeart } from "@/registry/default/icon-heart/icon-heart";
import { IconSparkle } from "@/registry/default/icon-sparkle/icon-sparkle";
import { IconStar } from "@/registry/default/icon-star/icon-star";
import { IconZap } from "@/registry/default/icon-zap/icon-zap";
import { IconRocket } from "@/registry/default/icon-rocket/icon-rocket";
import { IconSearch } from "@/registry/default/icon-search/icon-search";

const HERO_ICONS = [
  { Icon: IconHeart, color: "text-rose-400", name: "heart" },
  { Icon: IconSparkle, color: "text-amber-400", name: "sparkle" },
  { Icon: IconStar, color: "text-yellow-400", name: "star" },
  { Icon: IconZap, color: "text-orange-400", name: "zap" },
  { Icon: IconRocket, color: "text-sky-400", name: "rocket" },
  { Icon: IconSearch, color: "text-emerald-400", name: "search" },
];

function HeroIconCard({
  Icon,
  color,
  name,
  delayClass,
}: {
  Icon: React.ComponentType<any>;
  color: string;
  name: string;
  delayClass: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`animate-fade-up ${delayClass} icon-card flex items-center justify-center border border-[var(--card-border)] bg-[var(--surface)] p-3.5 sm:p-5 cursor-default`}
    >
      <Icon
        size={32}
        className={`${color} sm:hidden`}
        animate={isHovered ? "hover" : "rest"}
      />
      <Icon
        size={44}
        className={`${color} hidden sm:block`}
        animate={isHovered ? "hover" : "rest"}
      />
    </div>
  );
}

export function LandingHero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-5 pt-24 pb-20 sm:px-8 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 landing-bg" aria-hidden />
      <div className="absolute inset-0 grid-bg" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Badge */}
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 border border-[var(--card-border)] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-[var(--muted-foreground)]">
          <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
          <span>Open Source &middot; 500+ Animated Icons</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-1 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]">
          Install like shadcn.
          <br />
          <span className="text-[var(--accent)]">
            Animate with Motion.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up delay-2 mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--muted-foreground)] sm:mt-6 sm:text-lg">
          Drop animated SVG icons into your React app with one command.
          No npm icon packs — just copy the component and go.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
          <a
            href="#install"
            className="inline-flex h-11 items-center justify-center gap-2 bg-[var(--accent)] px-6 text-sm font-semibold text-zinc-900 transition hover:bg-[var(--accent-hover)] hover:shadow-[0_0_24px_var(--accent-soft)]"
          >
            Get started
          </a>
          <a
            href="/icons"
            className="inline-flex h-11 items-center justify-center gap-2 border border-[var(--card-border)] bg-white/[0.03] px-6 text-sm font-medium text-white transition hover:border-[var(--card-border-hover)] hover:bg-white/[0.06]"
          >
            Browse icons
            <span aria-hidden className="text-[var(--muted-foreground)]">&rarr;</span>
          </a>
        </div>

        {/* Icon strip */}
        <div className="animate-fade-up delay-4 mt-14 flex items-center justify-center gap-3 sm:mt-20 sm:gap-4">
          {HERO_ICONS.map(({ Icon, color, name }, i) => (
            <HeroIconCard
              key={name}
              Icon={Icon}
              color={color}
              name={name}
              delayClass={`delay-${i + 3}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
