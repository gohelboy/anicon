"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserRoundPenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const headVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const penVariants: Variants = {
  rest: { x: 0, y: 0, rotate: 0 },
  hover: {
    x: [0, -1, 1, 0],
    y: [0, 1, -1, 0],
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconUserRoundPen({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserRoundPenProps) {
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
      <path d="M2 21a8 8 0 0 1 10.821-7.487" />
      <motion.circle cx="10" cy="8" r="5" variants={headVariants} style={{ originX: "10px", originY: "8px" }} />
      <motion.path 
        d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" 
        variants={penVariants}
        style={{ originX: "18px", originY: "18px" }}
      />
    </motion.svg>
  );
}
