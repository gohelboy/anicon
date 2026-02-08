"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserRoundMinusProps extends React.SVGProps<SVGSVGElement> {
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

const minusVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: [0, -1, 1, 0],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconUserRoundMinus({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserRoundMinusProps) {
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
      <motion.line 
        x1="22" x2="16" y1="19" y2="19" 
        variants={minusVariants} 
      />
    </motion.svg>
  );
}
