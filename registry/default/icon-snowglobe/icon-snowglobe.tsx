"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSnowglobeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const globeVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -5, 5, -3, 3, 0],
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const flakeVariants = (delay: number): Variants => ({
  rest: { y: 0, opacity: 1 },
  hover: {
    y: [0, 2, -1, 1],
    opacity: [1, 0.5, 1],
    transition: { duration: 1.1, delay, repeat: Infinity, ease: "easeInOut" },
  },
});

export function IconSnowglobe({ size = 24, strokeWidth = 2, className, ...props }: IconSnowglobeProps) {
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
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <motion.g variants={globeVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="M5 14a7 7 0 0 1 14 0" />
        <path d="M7 14h10" />
        <path d="M8 20h8" />
        <path d="M6 20h12" />
      </motion.g>
      <motion.path d="M10 11h.01" variants={flakeVariants(0)} />
      <motion.path d="M12 9h.01" variants={flakeVariants(0.15)} />
      <motion.path d="M14 11h.01" variants={flakeVariants(0.3)} />
    </motion.svg>
  );
}
