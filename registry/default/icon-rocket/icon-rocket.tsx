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
    y: [0, -0.5, 0.5, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const thrustVariants: Variants = {
  rest: { scale: 1, opacity: 0 },
  hover: {
    scale: [1, 1.2, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 0.1,
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
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </motion.g>
      <motion.path 
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" 
        variants={thrustVariants}
        style={{ originX: "4.5px", originY: "16.5px" }}
      />
    </motion.svg>
  );
}
