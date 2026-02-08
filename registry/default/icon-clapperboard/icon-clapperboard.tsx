"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconClapperboardProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const topVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -30, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 0.5,
      ease: [0.34, 1.56, 0.64, 1], // Custom springy ease
    },
  },
};

const shineVariants: Variants = {
  rest: { opacity: 0.5 },
  hover: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

export function IconClapperboard({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconClapperboardProps) {
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
      <motion.g variants={topVariants} style={{ originX: "3px", originY: "11px" }}>
        <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
        <motion.path d="m6.2 5.3 3.1 3.9" variants={shineVariants} />
        <motion.path d="m12.4 3.4 3.1 4" variants={shineVariants} />
      </motion.g>
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </motion.svg>
  );
}
