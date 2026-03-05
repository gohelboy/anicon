"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHourglassFlipProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const frameVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 180],
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const sandVariants: Variants = {
  rest: { y: 0, opacity: 1 },
  hover: {
    y: [0, 3, 0],
    opacity: [1, 0.5, 1],
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconHourglassFlip({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconHourglassFlipProps) {
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
      <motion.g variants={frameVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="M6 2h12" />
        <path d="M6 22h12" />
        <path d="M8 2c0 6 8 6 8 10s-8 4-8 10" />
        <path d="M16 2c0 6-8 6-8 10s8 4 8 10" />
      </motion.g>
      <motion.path d="M11 12h2" variants={sandVariants} />
    </motion.svg>
  );
}
