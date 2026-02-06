import { IconArrowDown } from "@/registry/default/icon-arrow-down/icon-arrow-down";
import { IconArrowLeft } from "@/registry/default/icon-arrow-left/icon-arrow-left";
import { IconArrowRight } from "@/registry/default/icon-arrow-right/icon-arrow-right";
import { IconArrowUp } from "@/registry/default/icon-arrow-up/icon-arrow-up";
import { IconAArrowDown } from "@/registry/default/icon-a-arrow-down/icon-a-arrow-down";
import { IconAArrowUp } from "@/registry/default/icon-a-arrow-up/icon-a-arrow-up";
import { IconALargeSmall } from "@/registry/default/icon-a-large-small/icon-a-large-small";
import { IconAccessibility } from "@/registry/default/icon-accessibility/icon-accessibility";
import { IconActivity } from "@/registry/default/icon-activity/icon-activity";
import { IconActivitySquare } from "@/registry/default/icon-activity-square/icon-activity-square";
import { IconAirVent } from "@/registry/default/icon-air-vent/icon-air-vent";
import { IconAirplay } from "@/registry/default/icon-airplay/icon-airplay";
import { IconAlarmCheck } from "@/registry/default/icon-alarm-check/icon-alarm-check";
import { IconAlarmClock } from "@/registry/default/icon-alarm-clock/icon-alarm-clock";
import { IconChevronDown } from "@/registry/default/icon-chevron-down/icon-chevron-down";
import { IconChevronLeft } from "@/registry/default/icon-chevron-left/icon-chevron-left";
import { IconChevronRight } from "@/registry/default/icon-chevron-right/icon-chevron-right";
import { IconChevronUp } from "@/registry/default/icon-chevron-up/icon-chevron-up";
import { IconClock } from "@/registry/default/icon-clock/icon-clock";
import { IconHeart } from "@/registry/default/icon-heart/icon-heart";
import { IconHome } from "@/registry/default/icon-home/icon-home";
import { IconMapPin } from "@/registry/default/icon-map-pin/icon-map-pin";
import { IconMenu } from "@/registry/default/icon-menu/icon-menu";
import { IconMenuBento } from "@/registry/default/icon-menu-bento/icon-menu-bento";
import { IconMenuDots } from "@/registry/default/icon-menu-dots/icon-menu-dots";
import { IconMenuDotsVertical } from "@/registry/default/icon-menu-dots-vertical/icon-menu-dots-vertical";
import { IconMenuGrid } from "@/registry/default/icon-menu-grid/icon-menu-grid";
import { IconMenuList } from "@/registry/default/icon-menu-list/icon-menu-list";
import { IconMenuSliders } from "@/registry/default/icon-menu-sliders/icon-menu-sliders";
import { IconMenuTabs } from "@/registry/default/icon-menu-tabs/icon-menu-tabs";
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
    name: "icon-a-arrow-down",
    component: IconAArrowDown,
    color: "text-white",
    description: "Letter A with a bouncing down arrow",
    tags: ["a", "arrow", "down", "typography"],
  },
  {
    name: "icon-a-arrow-up",
    component: IconAArrowUp,
    color: "text-white",
    description: "Letter A with a floating up arrow",
    tags: ["a", "arrow", "up", "typography"],
  },
  {
    name: "icon-a-large-small",
    component: IconALargeSmall,
    color: "text-white",
    description: "Large and small A with size-shift animation",
    tags: ["a", "typography", "scale", "text"],
  },
  {
    name: "icon-accessibility",
    component: IconAccessibility,
    color: "text-sky-400",
    description: "Accessibility icon with a gentle pose sway",
    tags: ["accessibility", "person", "motion"],
  },
  {
    name: "icon-activity",
    component: IconActivity,
    color: "text-emerald-400",
    description: "Activity pulse with animated stroke drift",
    tags: ["activity", "pulse", "health", "wave"],
  },
  {
    name: "icon-activity-square",
    component: IconActivitySquare,
    color: "text-emerald-400",
    description: "Activity square with pulsing sparkline",
    tags: ["activity", "square", "pulse", "health"],
  },
  {
    name: "icon-air-vent",
    component: IconAirVent,
    color: "text-sky-300",
    description: "Air vent with shifting airflow lines",
    tags: ["air", "vent", "wind", "cooling"],
  },
  {
    name: "icon-airplay",
    component: IconAirplay,
    color: "text-white",
    description: "Airplay icon with a popping cast triangle",
    tags: ["airplay", "cast", "stream", "screen"],
  },
  {
    name: "icon-alarm-check",
    component: IconAlarmCheck,
    color: "text-amber-400",
    description: "Alarm clock with a checkmark draw",
    tags: ["alarm", "clock", "check", "time"],
  },
  {
    name: "icon-alarm-clock",
    component: IconAlarmClock,
    color: "text-amber-400",
    description: "Alarm clock with ticking hands",
    tags: ["alarm", "clock", "time"],
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
    name: "icon-menu-bento",
    component: IconMenuBento,
    color: "text-white",
    description: "Bento menu tiles with a soft pop animation",
    tags: ["menu", "bento", "grid", "apps", "navigation"],
  },
  {
    name: "icon-menu-dots",
    component: IconMenuDots,
    color: "text-white",
    description: "Horizontal menu dots with a playful bounce",
    tags: ["menu", "dots", "more", "overflow", "navigation"],
  },
  {
    name: "icon-menu-dots-vertical",
    component: IconMenuDotsVertical,
    color: "text-white",
    description: "Vertical menu dots with a subtle sway",
    tags: ["menu", "dots", "more", "overflow", "navigation"],
  },
  {
    name: "icon-menu-grid",
    component: IconMenuGrid,
    color: "text-white",
    description: "Grid menu with staggered tile motion",
    tags: ["menu", "grid", "apps", "navigation"],
  },
  {
    name: "icon-menu-list",
    component: IconMenuList,
    color: "text-white",
    description: "List menu with animated bullets and lines",
    tags: ["menu", "list", "items", "navigation"],
  },
  {
    name: "icon-menu-sliders",
    component: IconMenuSliders,
    color: "text-white",
    description: "Slider menu with animated knobs",
    tags: ["menu", "sliders", "settings", "controls"],
  },
  {
    name: "icon-menu-tabs",
    component: IconMenuTabs,
    color: "text-white",
    description: "Tabbed menu with stacked bars",
    tags: ["menu", "tabs", "navigation", "list"],
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
