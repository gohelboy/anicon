"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconDicesProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const diceVariants: Variants = {
  rest: { rotate: 0, x: 0, y: 0 },
  hover: (i: number) => ({
    rotate: [0, -10, 10, -5, 5, 0],
    x: [0, -1, 1, 0],
    y: [0, 1, -1, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

const dotVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconDices({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconDicesProps) {
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
      <motion.g variants={diceVariants} custom={0} style={{ originX: "8px", originY: "16px" }}>
        <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
        <motion.path d="M6 18h.01" variants={dotVariants} />
        <motion.path d="M10 14h.01" variants={dotVariants} />
      </motion.g>
      <motion.g variants={diceVariants} custom={1} style={{ originX: "16px", originY: "8px" }}>
        <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
        <motion.path d="M15 6h.01" variants={dotVariants} />
        <motion.path d="M18 9h.01" variants={dotVariants} />
      </motion.g>
    </motion.svg>
  );
}
