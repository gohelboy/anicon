"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconEarProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const earVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const innerVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconEar({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconEarProps) {
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
      <motion.path 
        d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" 
        variants={earVariants}
        style={{ originX: "12px", originY: "8.5px" }}
      />
      <motion.path 
        d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" 
        variants={innerVariants}
        style={{ originX: "12.5px", originY: "11px" }}
      />
    </motion.svg>
  );
}
