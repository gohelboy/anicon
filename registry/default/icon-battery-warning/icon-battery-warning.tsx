"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBatteryWarningProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const batteryVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -2, 2, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const exclamationVariants: Variants = {
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [1, 0.4, 1],
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconBatteryWarning({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBatteryWarningProps) {
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
      <motion.g variants={batteryVariants} style={{ originX: "10px", originY: "12px" }}>
        <path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
        <path d="M22 14v-4" />
        <path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
      </motion.g>
      <motion.g variants={exclamationVariants} style={{ originX: "6px", originY: "12px" }}>
        <path d="M10 7v6" />
        <path d="M10 17h.01" />
      </motion.g>
    </motion.svg>
  );
}
