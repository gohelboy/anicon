"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserRoundSearchProps extends React.SVGProps<SVGSVGElement> {
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

const searchVariants: Variants = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: {
    scale: [1, 1.1, 1],
    x: [0, 1, -1, 0],
    y: [0, -1, 1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconUserRoundSearch({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserRoundSearchProps) {
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
      <motion.circle cx="10" cy="8" r="5" variants={headVariants} style={{ originX: "10px", originY: "8px" }} />
      <path d="M2 21a8 8 0 0 1 10.434-7.62" />
      <motion.g variants={searchVariants} style={{ originX: "18px", originY: "18px" }}>
        <circle cx="18" cy="18" r="3" />
        <path d="m22 22-1.9-1.9" />
      </motion.g>
    </motion.svg>
  );
}
