"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCandyCaneProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const swayVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 5, -5, 3, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const stripeVariants = (delay: number): Variants => ({
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.3, 1],
    transition: {
      duration: 0.6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export function IconCandyCane({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCandyCaneProps) {
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
      <motion.g variants={swayVariants} style={{ originX: "14px", originY: "4px" }}>
        <path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" />
        <motion.path d="M17.75 7 15 2.1" variants={stripeVariants(0)} />
        <motion.path d="M10.9 4.8 13 9" variants={stripeVariants(0.15)} />
        <motion.path d="m7.9 9.7 2 4.4" variants={stripeVariants(0.3)} />
        <motion.path d="M4.9 14.7 7 18.9" variants={stripeVariants(0.45)} />
      </motion.g>
    </motion.svg>
  );
}
