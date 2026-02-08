"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconChartPieProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const sliceVariants: Variants = {
  rest: { x: 0, y: 0, scale: 1 },
  hover: {
    x: 2,
    y: -2,
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const baseVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export function IconChartPie({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconChartPieProps) {
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
        d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" 
        variants={sliceVariants}
      />
      <motion.path 
        d="M21.21 15.89A10 10 0 1 1 8 2.83" 
        variants={baseVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
    </motion.svg>
  );
}
