"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHashProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const lineVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: (i: number) => ({
    pathLength: [1, 0.7, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconHash({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconHashProps) {
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
      <motion.line x1="4" x2="20" y1="9" y2="9" variants={lineVariants} custom={0} />
      <motion.line x1="4" x2="20" y1="15" y2="15" variants={lineVariants} custom={1} />
      <motion.line x1="10" x2="8" y1="3" y2="21" variants={lineVariants} custom={2} />
      <motion.line x1="16" x2="14" y1="3" y2="21" variants={lineVariants} custom={3} />
    </motion.svg>
  );
}
