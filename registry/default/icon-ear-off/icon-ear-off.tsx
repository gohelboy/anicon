"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconEarOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const slashVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const earVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -2, 2, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconEarOff({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconEarOffProps) {
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
      <motion.g variants={earVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" />
        <path d="M6 8.5c0-.75.13-1.47.36-2.14" />
        <path d="M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" />
        <path d="M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" />
      </motion.g>
      <motion.line 
        x1="2" x2="22" y1="2" y2="22" 
        variants={slashVariants}
      />
    </motion.svg>
  );
}
