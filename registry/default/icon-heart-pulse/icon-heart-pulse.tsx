"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHeartPulseProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const heartVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.1, 1, 1.15, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const lineVariants: Variants = {
  rest: { pathLength: 0, opacity: 0 },
  hover: {
    pathLength: [0, 1],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconHeartPulse({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconHeartPulseProps) {
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
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" 
        variants={heartVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.path 
        d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" 
        variants={lineVariants}
      />
    </motion.svg>
  );
}
