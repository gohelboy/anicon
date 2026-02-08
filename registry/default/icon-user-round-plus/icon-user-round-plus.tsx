"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserRoundPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const headVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const plusVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: [1, 1.2, 1],
    rotate: [0, 90, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconUserRoundPlus({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserRoundPlusProps) {
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
      <path d="M2 21a8 8 0 0 1 13.292-6" />
      <motion.circle cx="10" cy="8" r="5" variants={headVariants} style={{ originX: "10px", originY: "8px" }} />
      <motion.g variants={plusVariants} style={{ originX: "19px", originY: "19px" }}>
        <path d="M19 16v6" />
        <path d="M22 19h-6" />
      </motion.g>
    </motion.svg>
  );
}
