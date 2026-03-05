"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHarpProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const frameVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -3, 0],
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const stringVariants = (delay: number): Variants => ({
  rest: { scaleX: 1 },
  hover: {
    scaleX: [1, 1.15, 1],
    transition: { duration: 0.4, delay, repeat: Infinity, ease: "easeInOut" },
  },
});

export function IconHarp({ size = 24, strokeWidth = 2, className, ...props }: IconHarpProps) {
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
      <motion.g variants={frameVariants} style={{ originX: "12px", originY: "14px" }}>
        <path d="M7 20h8" />
        <path d="M9 20c-1-6 1-12 6-14" />
        <path d="M15 6v14" />
      </motion.g>
      <motion.path d="M11 9v8" variants={stringVariants(0)} style={{ originX: "11px", originY: "13px" }} />
      <motion.path d="M12 8.5v8.5" variants={stringVariants(0.1)} style={{ originX: "12px", originY: "13px" }} />
      <motion.path d="M13 8v9" variants={stringVariants(0.2)} style={{ originX: "13px", originY: "13px" }} />
    </motion.svg>
  );
}
