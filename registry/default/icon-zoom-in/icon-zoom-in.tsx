"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconZoomInProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const magnifierVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const plusVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 90,
    scale: 1.2,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};

export function IconZoomIn({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconZoomInProps) {
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
      <motion.g variants={magnifierVariants} style={{ originX: "11px", originY: "11px" }}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
        <motion.g variants={plusVariants} style={{ originX: "11px", originY: "11px" }}>
          <line x1="11" x2="11" y1="8" y2="14" />
          <line x1="8" x2="14" y1="11" y2="11" />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
}
