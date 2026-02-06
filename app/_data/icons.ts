import { IconArrowDown } from "@/registry/default/icon-arrow-down/icon-arrow-down";
import { IconArrowLeft } from "@/registry/default/icon-arrow-left/icon-arrow-left";
import { IconArrowRight } from "@/registry/default/icon-arrow-right/icon-arrow-right";
import { IconArrowUp } from "@/registry/default/icon-arrow-up/icon-arrow-up";
import { IconChevronDown } from "@/registry/default/icon-chevron-down/icon-chevron-down";
import { IconChevronLeft } from "@/registry/default/icon-chevron-left/icon-chevron-left";
import { IconChevronRight } from "@/registry/default/icon-chevron-right/icon-chevron-right";
import { IconChevronUp } from "@/registry/default/icon-chevron-up/icon-chevron-up";
import { IconClock } from "@/registry/default/icon-clock/icon-clock";
import { IconHeart } from "@/registry/default/icon-heart/icon-heart";
import { IconHome } from "@/registry/default/icon-home/icon-home";
import { IconMapPin } from "@/registry/default/icon-map-pin/icon-map-pin";
import { IconMenu } from "@/registry/default/icon-menu/icon-menu";
import { IconSparkle } from "@/registry/default/icon-sparkle/icon-sparkle";

export const iconsRegistry = [
  {
    name: "icon-heart",
    component: IconHeart,
    color: "text-rose-500",
    description: "Heart with hover and tap scale animation",
    tags: ["heart", "love", "like", "favorite"],
  },
  {
    name: "icon-sparkle",
    component: IconSparkle,
    color: "text-amber-400",
    description: "Sparkle with scale and rotate on interaction",
    tags: ["sparkle", "star", "magic", "shine"],
  },
  {
    name: "icon-arrow-right",
    component: IconArrowRight,
    color: "text-white",
    description: "Arrow right with hover slide and tap animation",
    tags: ["arrow", "right", "next", "forward", "direction"],
  },
  {
    name: "icon-arrow-left",
    component: IconArrowLeft,
    color: "text-white",
    description: "Arrow left with hover slide and tap animation",
    tags: ["arrow", "left", "back", "previous", "direction"],
  },
  {
    name: "icon-arrow-up",
    component: IconArrowUp,
    color: "text-white",
    description: "Arrow up with hover slide and tap animation",
    tags: ["arrow", "up", "direction"],
  },
  {
    name: "icon-arrow-down",
    component: IconArrowDown,
    color: "text-white",
    description: "Arrow down with hover slide and tap animation",
    tags: ["arrow", "down", "direction"],
  },
  {
    name: "icon-chevron-right",
    component: IconChevronRight,
    color: "text-white",
    description: "Chevron right with hover slide and tap animation",
    tags: ["chevron", "right", "collapse", "expand", "direction"],
  },
  {
    name: "icon-chevron-left",
    component: IconChevronLeft,
    color: "text-white",
    description: "Chevron left with hover slide and tap animation",
    tags: ["chevron", "left", "collapse", "expand", "direction"],
  },
  {
    name: "icon-chevron-up",
    component: IconChevronUp,
    color: "text-white",
    description: "Chevron up with hover slide and tap animation",
    tags: ["chevron", "up", "collapse", "expand", "direction"],
  },
  {
    name: "icon-chevron-down",
    component: IconChevronDown,
    color: "text-white",
    description: "Chevron down with hover slide and tap animation",
    tags: ["chevron", "down", "collapse", "expand", "direction"],
  },
  {
    name: "icon-home",
    component: IconHome,
    color: "text-sky-400",
    description: "Home icon with a playful roof lift and door bounce",
    tags: ["home", "navigation", "house", "dashboard"],
  },
  {
    name: "icon-menu",
    component: IconMenu,
    color: "text-white",
    description: "Menu icon with staggered line slides",
    tags: ["menu", "navigation", "hamburger", "list"],
  },
  {
    name: "icon-clock",
    component: IconClock,
    color: "text-emerald-400",
    description: "Clock icon with ticking hands and gentle ring pulse",
    tags: ["clock", "time", "schedule", "navigation"],
  },
  {
    name: "icon-map-pin",
    component: IconMapPin,
    color: "text-rose-400",
    description: "Map pin with lift and pulse ripple",
    tags: ["map", "pin", "navigation", "location"],
  },
] as const;

export type IconEntry = (typeof iconsRegistry)[number];
