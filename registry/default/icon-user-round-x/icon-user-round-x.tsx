"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserRoundXProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const xVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, 90, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconUserRoundX({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserRoundXProps) {
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
      <path d="M2 21a8 8 0 0 1 11.873-7" />
      <motion.circle cx="10" cy="8" r="5" style={{ originX: "10px", originY: "8px" }} />
      <motion.g variants={xVariants} style={{ originX: "19.5px", originY: "19.5px" }}>
        <path d="m17 17 5 5" />
        <path d="m22 17-5 5" />
      </motion.g>
    </motion.svg>
  );
}
