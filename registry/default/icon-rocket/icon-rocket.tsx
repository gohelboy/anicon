"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconRocketProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rocketVariants: Variants = {
  rest: { x: 0, y: 0, rotate: 0 },
  hover: {
    x: [0, 0.5, -0.5, 0],
    y: [0, -2, 0],
    rotate: [0, -1, 1, 0],
    transition: {
      duration: 0.1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const plumeVariants: Variants = {
  rest: { opacity: 0, scale: 0.5, y: 0 },
  hover: {
    opacity: [0.3, 0.8, 0.3],
    scale: [0.8, 1.2, 0.8],
    y: [0, 1, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconRocket({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconRocketProps) {
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
      <motion.g variants={rocketVariants} style={{ originX: "12px", originY: "12px" }}>
        {/* Fins and Body - Proper Lucide Paths */}
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4.5a2.09 2.09 0 0 1 3-.14"/>
        <path d="M15 5s-3.03.55-4.5 2a2.09 2.09 0 0 0-.14 3"/>
      </motion.g>
      {/* Dynamic Plume */}
      <motion.path 
        d="M3 21c-1-1 0-3 1-4l3 3c-1 1-3 2-4 1z"
        fill="currentColor"
        stroke="none"
        variants={plumeVariants}
        style={{ originX: "3px", originY: "21px" }}
      />
    </motion.svg>
  );
}
