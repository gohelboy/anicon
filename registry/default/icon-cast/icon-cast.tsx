"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const castWave1Variants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      delay: 0.1,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

const castWave2Variants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      delay: 0.4,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

const dotVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.5, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconCast({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCastProps) {
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
      <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
      <motion.path d="M2 12a9 9 0 0 1 8 8" variants={castWave2Variants} />
      <motion.path d="M2 16a5 5 0 0 1 4 4" variants={castWave1Variants} />
      <motion.line x1="2" x2="2.01" y1="20" y2="20" variants={dotVariants} />
    </motion.svg>
  );
}
