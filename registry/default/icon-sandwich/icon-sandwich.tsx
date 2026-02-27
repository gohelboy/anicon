"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSandwichProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bounceVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -3, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const fillingVariants: Variants = {
  rest: { scaleX: 1 },
  hover: {
    scaleX: [1, 1.03, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSandwich({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSandwichProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      variants={bounceVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" />
      <path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
      <path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
      <path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
      <motion.rect width="20" height="4" x="2" y="11" rx="1" variants={fillingVariants} style={{ originX: "12px" }} />
    </motion.svg>
  );
}
