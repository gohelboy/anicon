"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconDatabaseZapProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const zapVariants: Variants = {
  rest: { scale: 1, opacity: 1, pathLength: 1 },
  hover: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.8, 1],
    pathLength: [1, 0.8, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const diskVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconDatabaseZap({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconDatabaseZapProps) {
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
      <motion.ellipse cx="12" cy="5" rx="9" ry="3" variants={diskVariants} />
      <path d="M3 5V19A9 3 0 0 0 15 21.84" />
      <path d="M21 5V8" />
      <motion.path 
        d="M21 12L18 17H22L19 22" 
        variants={zapVariants}
        style={{ originX: "20px", originY: "17px" }}
      />
      <path d="M3 12A9 3 0 0 0 14.59 14.87" />
    </motion.svg>
  );
}
