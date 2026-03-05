"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconGrid2x2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const cellVariants = (delay: number): Variants => ({
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.08, 1],
    transition: { duration: 0.35, delay, ease: "easeInOut" },
  },
});

export function IconGrid2x2({ size = 24, strokeWidth = 2, className, ...props }: IconGrid2x2Props) {
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
      <motion.rect x="4" y="4" width="7" height="7" rx="1" variants={cellVariants(0)} />
      <motion.rect x="13" y="4" width="7" height="7" rx="1" variants={cellVariants(0.05)} />
      <motion.rect x="4" y="13" width="7" height="7" rx="1" variants={cellVariants(0.1)} />
      <motion.rect x="13" y="13" width="7" height="7" rx="1" variants={cellVariants(0.15)} />
    </motion.svg>
  );
}
