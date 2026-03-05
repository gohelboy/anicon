"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCompassRoseProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const roseVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 45,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const coreVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.18, 1],
    transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconCompassRose({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCompassRoseProps) {
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
      <circle cx="12" cy="12" r="9" />
      <motion.g variants={roseVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="m12 4 2.2 5.8L12 12l-2.2-2.2Z" />
        <path d="m20 12-5.8 2.2L12 12l2.2-2.2Z" />
        <path d="m12 20-2.2-5.8L12 12l2.2 2.2Z" />
        <path d="m4 12 5.8-2.2L12 12l-2.2 2.2Z" />
      </motion.g>
      <motion.circle cx="12" cy="12" r="1" variants={coreVariants} />
    </motion.svg>
  );
}
