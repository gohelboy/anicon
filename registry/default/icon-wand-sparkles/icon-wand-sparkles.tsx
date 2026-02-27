"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconWandSparklesProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const wandVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -8, 8, -4, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const sparkleVariants = (delay: number): Variants => ({
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [0, 1, 0],
    scale: [0.5, 1.4, 0.5],
    transition: {
      duration: 0.8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export function IconWandSparkles({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconWandSparklesProps) {
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
      {/* Wand body */}
      <motion.g variants={wandVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
        <path d="m14 7 3 3" />
      </motion.g>
      {/* Sparkles */}
      <motion.path d="M5 6v4" variants={sparkleVariants(0)} />
      <motion.path d="M19 14v4" variants={sparkleVariants(0.2)} />
      <motion.path d="M10 2v2" variants={sparkleVariants(0.4)} />
      <motion.path d="M7 8H3" variants={sparkleVariants(0)} />
      <motion.path d="M21 16h-4" variants={sparkleVariants(0.2)} />
      <motion.path d="M11 3H9" variants={sparkleVariants(0.4)} />
    </motion.svg>
  );
}
