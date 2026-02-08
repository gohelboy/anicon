"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTrainFrontProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bodyVariants: Variants = {
  rest: { y: 0, x: 0 },
  hover: {
    y: [0, -0.5, 0],
    x: [0, 0.3, -0.3, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const lightVariants: Variants = {
  rest: { opacity: 0.5 },
  hover: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconTrainFront({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTrainFrontProps) {
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
      <motion.g variants={bodyVariants}>
        <path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
        <motion.path d="m9 15-1-1" variants={lightVariants} />
        <motion.path d="m15 15 1-1" variants={lightVariants} />
        <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
        <path d="m8 19-2 3" />
        <path d="m16 19 2 3" />
      </motion.g>
    </motion.svg>
  );
}
