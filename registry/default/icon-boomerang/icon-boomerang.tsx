"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBoomerangProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const boomerangVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -24, 18, -10, 0],
    scale: [1, 1.04, 1],
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  tap: {
    rotate: -28,
    scale: 0.96,
    transition: { duration: 0.15, ease: "easeOut" },
  },
};

export function IconBoomerang({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBoomerangProps) {
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
      <motion.g variants={boomerangVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="m6 9 5-5 3 3-5 5" />
        <path d="m10 13 7-7 3 3-7 7" />
      </motion.g>
    </motion.svg>
  );
}
