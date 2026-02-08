"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMousePointerClickProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pointerVariants: Variants = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: {
    scale: [1, 0.95, 1],
    x: [0, 1, 0],
    y: [0, 1, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const rippleVariants: Variants = {
  rest: { opacity: 0, scale: 0.8 },
  hover: (i: number) => ({
    opacity: [0, 1, 0],
    scale: [0.8, 1.2, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

export function IconMousePointerClick({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMousePointerClickProps) {
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
      <motion.path d="M14 4.1 12 6" variants={rippleVariants} custom={0} />
      <motion.path d="m5.1 8-2.9-.8" variants={rippleVariants} custom={1} />
      <motion.path d="m6 12-1.9 2" variants={rippleVariants} custom={2} />
      <motion.path d="M7.2 2.2 8 5.1" variants={rippleVariants} custom={3} />
      <motion.path 
        d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" 
        variants={pointerVariants}
        style={{ originX: "10px", originY: "10px" }}
      />
    </motion.svg>
  );
}
