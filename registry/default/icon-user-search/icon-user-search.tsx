"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

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

export function IconUserSearch({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserSearchProps) {
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
      <motion.circle cx="10" cy="7" r="4" />
      <motion.path d="M10.3 15H7a4 4 0 0 0-4 4v2"  />
      <motion.g variants={searchVariants} style={{ originX: "17px", originY: "17px" }}>
        <circle cx="17" cy="17" r="3" />
        <path d="m21 21-1.9-1.9" />
      </motion.g>
    </motion.svg>
  );
}
