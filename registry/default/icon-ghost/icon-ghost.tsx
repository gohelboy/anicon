"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconGhostProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const ghostVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -2, 0, 2, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const eyeVariants: Variants = {
  rest: { scaleY: 1 },
  hover: {
    scaleY: [1, 0.1, 1],
    transition: {
      duration: 0.15,
      repeat: Infinity,
      repeatDelay: 2.5,
    },
  },
};

export function IconGhost({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconGhostProps) {
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
      <motion.g variants={ghostVariants}>
        <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
        <motion.path d="M9 10h.01" variants={eyeVariants} style={{ originY: "10px" }} />
        <motion.path d="M15 10h.01" variants={eyeVariants} style={{ originY: "10px" }} />
      </motion.g>
    </motion.svg>
  );
}
