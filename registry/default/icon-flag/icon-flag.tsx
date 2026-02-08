"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFlagProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const flagVariants: Variants = {
  rest: { skewX: 0, rotate: 0 },
  hover: {
    skewX: [0, 5, -5, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const poleVariants: Variants = {
  rest: { scaleY: 1 },
  hover: {
    scaleY: [1, 1.02, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconFlag({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconFlagProps) {
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
        d="M4 22V4" 
        variants={poleVariants}
        style={{ originY: "22px" }}
      />
      <motion.path 
        d="M4 4a6 6 0 0 1 4-2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" 
        variants={flagVariants}
        style={{ originX: "4px", originY: "9px" }}
      />
    </motion.svg>
  );
}
