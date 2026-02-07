"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconScissorsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const topVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -15, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const bottomVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 15, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconScissors({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconScissorsProps) {
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
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <motion.line 
        x1="20" x2="8.12" y1="4" y2="15.88" 
        variants={bottomVariants} 
        style={{ originX: "9px", originY: "12px" }}
      />
      <motion.line 
        x1="14.47" x2="20" y1="14.48" y2="20" 
        variants={topVariants} 
        style={{ originX: "9px", originY: "12px" }}
      />
      <motion.line 
        x1="8.12" x2="12" y1="8.12" y2="12" 
        variants={topVariants} 
        style={{ originX: "9px", originY: "12px" }}
      />
    </motion.svg>
  );
}
