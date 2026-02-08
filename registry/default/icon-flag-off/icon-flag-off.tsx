"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFlagOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const flagVariants: Variants = {
  rest: { skewX: 0 },
  hover: {
    skewX: [0, 2, -2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const slashVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.6, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconFlagOff({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconFlagOffProps) {
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
      <motion.path d="M4 22V4" />
      <motion.g variants={flagVariants} style={{ originX: "4px", originY: "9px" }}>
        <path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
        <path d="M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" />
      </motion.g>
      <motion.path 
        d="m2 2 20 20" 
        variants={slashVariants}
      />
    </motion.svg>
  );
}
