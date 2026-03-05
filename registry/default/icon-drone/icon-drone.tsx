"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconDroneProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bodyVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -2, 0],
    transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
  },
};

const propVariants = (delay: number): Variants => ({
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: { duration: 0.45, repeat: Infinity, ease: "linear", delay },
  },
});

export function IconDrone({ size = 24, strokeWidth = 2, className, ...props }: IconDroneProps) {
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
      <motion.g variants={bodyVariants}>
        <rect x="9" y="10" width="6" height="4" rx="1" />
        <path d="M10 12H6" />
        <path d="M18 12h-4" />
        <path d="M12 10V7" />
        <path d="M12 17v-3" />
      </motion.g>
      <motion.circle cx="6" cy="12" r="2" variants={propVariants(0)} style={{ originX: "6px", originY: "12px" }} />
      <motion.circle cx="18" cy="12" r="2" variants={propVariants(0.1)} style={{ originX: "18px", originY: "12px" }} />
      <motion.circle cx="12" cy="7" r="2" variants={propVariants(0.2)} style={{ originX: "12px", originY: "7px" }} />
      <motion.circle cx="12" cy="17" r="2" variants={propVariants(0.3)} style={{ originX: "12px", originY: "17px" }} />
    </motion.svg>
  );
}
