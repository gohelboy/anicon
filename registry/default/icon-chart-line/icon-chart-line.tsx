"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconChartLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const lineVariants: Variants = {
  rest: { pathLength: 1 },
  hover: {
    pathLength: [1, 0.4, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconChartLine({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconChartLineProps) {
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <motion.path d="m19 9-5 5-4-4-3 3" variants={lineVariants} />
    </motion.svg>
  );
}
