"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconDollarSignProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const signVariants: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: [0, -2, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const lineVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [1, 0.8, 1],
    opacity: [1, 0.6, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconDollarSign({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconDollarSignProps) {
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
      <motion.line x1="12" x2="12" y1="2" y2="22" variants={lineVariants} />
      <motion.path 
        d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" 
        variants={signVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
    </motion.svg>
  );
}
