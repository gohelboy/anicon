"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconListBulletsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rowVariants = (delay: number): Variants => ({
  rest: { x: 0 },
  hover: {
    x: [0, 1.5, 0],
    transition: { duration: 0.4, delay, ease: "easeInOut" },
  },
});

export function IconListBullets({ size = 24, strokeWidth = 2, className, ...props }: IconListBulletsProps) {
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
      <motion.path d="M5 7h.01" variants={rowVariants(0)} />
      <motion.path d="M9 7h10" variants={rowVariants(0)} />
      <motion.path d="M5 12h.01" variants={rowVariants(0.05)} />
      <motion.path d="M9 12h10" variants={rowVariants(0.05)} />
      <motion.path d="M5 17h.01" variants={rowVariants(0.1)} />
      <motion.path d="M9 17h10" variants={rowVariants(0.1)} />
    </motion.svg>
  );
}
