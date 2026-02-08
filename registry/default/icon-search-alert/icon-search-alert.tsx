"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSearchAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const magnifierVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -10, 10, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const exclamationVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSearchAlert({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSearchAlertProps) {
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
        <path d="m21 21-4.3-4.3" />
      </motion.g>
      <motion.g variants={exclamationVariants} style={{ originX: "11px", originY: "11px" }}>
        <path d="M11 7v4" />
        <path d="M11 15h.01" />
      </motion.g>
    </motion.svg>
  );
}
