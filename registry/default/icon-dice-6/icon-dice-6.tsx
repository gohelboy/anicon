"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconDice6Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rollVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 360],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  tap: {
    rotate: [0, 720],
    scale: [1, 0.9, 1],
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const dotVariants = (delay: number): Variants => ({
  rest: { scale: 1 },
  hover: {
    scale: [0, 1],
    transition: { duration: 0.3, delay: 0.5 + delay },
  },
});

export function IconDice6({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconDice6Props) {
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
      <motion.g variants={rollVariants} style={{ originX: "12px", originY: "12px" }}>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <motion.path d="M16 8h.01" variants={dotVariants(0)} />
        <motion.path d="M16 12h.01" variants={dotVariants(0.05)} />
        <motion.path d="M16 16h.01" variants={dotVariants(0.1)} />
        <motion.path d="M8 8h.01" variants={dotVariants(0.15)} />
        <motion.path d="M8 12h.01" variants={dotVariants(0.2)} />
        <motion.path d="M8 16h.01" variants={dotVariants(0.25)} />
      </motion.g>
    </motion.svg>
  );
}
