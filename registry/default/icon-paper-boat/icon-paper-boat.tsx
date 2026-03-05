"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPaperBoatProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const boatVariants: Variants = {
  rest: { rotate: 0, y: 0 },
  hover: {
    rotate: [0, -5, 5, -3, 0],
    y: [0, -1, 1, 0],
    transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" },
  },
};

const waveVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0.4, 1, 0.4],
    opacity: [0.6, 1, 0.6],
    transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconPaperBoat({ size = 24, strokeWidth = 2, className, ...props }: IconPaperBoatProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
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
      {...rest}
    >
      <motion.g variants={boatVariants} style={{ originX: "12px", originY: "14px" }}>
        <path d="m4 14 8-7 8 7Z" />
        <path d="m12 7 1.6 7H10.4Z" />
      </motion.g>
      <motion.path d="M4 18c2-1 4 1 6 0s4-1 6 0 4-1 4-1" variants={waveVariants} />
    </motion.svg>
  );
}
