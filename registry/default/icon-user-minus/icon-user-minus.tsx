"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

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

export function IconUserMinus({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserMinusProps) {
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
      <motion.g >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </motion.g>
      <motion.line 
        x1="22" x2="16" y1="11" y2="11" 
        variants={minusVariants} 
      />
    </motion.svg>
  );
}
