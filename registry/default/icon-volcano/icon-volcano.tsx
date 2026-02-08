"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconVolcanoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const smokeVariants: Variants = {
  rest: { y: 0, opacity: 0 },
  hover: (i: number) => ({
    y: [0, -6, -12],
    opacity: [0, 1, 0, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      delay: i * 0.5,
      ease: "linear",
    },
  }),
};

const lavaVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    opacity: [1, 0.6, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconVolcano({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconVolcanoProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...restOptions } = props;
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
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...restOptions}
    >
      {/* Smoke Lines */}
      <motion.path d="M12 4V2" variants={smokeVariants} custom={0} />
      <motion.path d="M9 6v-2" variants={smokeVariants} custom={1} />
      <motion.path d="M15 6v-2" variants={smokeVariants} custom={2} />

      {/* Volcano Body */}
      <path d="M2 22h20" />
      <path d="M7 22l4-14h2l4 14" />
      
      {/* Lava/Crater Lip */}
      <motion.path d="M11 8h2" variants={lavaVariants} stroke="currentColor" strokeWidth={strokeWidth + 0.5} />
      
      {/* Side Slopes Detail */}
      <path d="M17 22l-2-7" />
      <path d="M7 22l2-7" />
    </motion.svg>
  );
}
