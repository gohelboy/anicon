"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserXProps extends React.SVGProps<SVGSVGElement> {
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

export function IconUserX({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserXProps) {
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
      <motion.g >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </motion.g>
      <motion.g variants={xVariants} style={{ originX: "19.5px", originY: "10.5px" }}>
        <line x1="17" x2="22" y1="8" y2="13" />
        <line x1="22" x2="17" y1="8" y2="13" />
      </motion.g>
    </motion.svg>
  );
}
