"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBracesProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const leftBraceVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: [0, -2, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const rightBraceVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: [0, 2, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function IconBraces({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBracesProps) {
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
      <motion.path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" variants={leftBraceVariants} />
      <motion.path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" variants={rightBraceVariants} />
    </motion.svg>
  );
}
