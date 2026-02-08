"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBellElectricProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bellVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const strikerVariants: Variants = {
  rest: { x: 0, scale: 1 },
  hover: {
    x: [0, -1, 1, -1, 1, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.15,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconBellElectric({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBellElectricProps) {
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
      <motion.g variants={bellVariants} style={{ originX: "9px", originY: "9px" }}>
        <path d="M18.8 4A11 11 0 0 1 20 9" />
        <path d="M9 9h.01" />
        <circle cx="9" cy="9" r="7" />
      </motion.g>
      <motion.circle 
        cx="20" cy="16" r="2" 
        variants={strikerVariants} 
        style={{ originX: "20px", originY: "16px" }}
      />
      <path d="M18.518 17.347A7 7 0 0 1 14 19" />
      <rect x="4" y="16" width="10" height="6" rx="2" />
    </motion.svg>
  );
}
