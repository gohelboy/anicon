"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const checkVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [1, 0, 1],
    opacity: [1, 0, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.2, 1],
    },
  },
};

export function IconUserCheck({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserCheckProps) {
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
      <motion.path 
        d="m16 11 2 2 4-4" 
        variants={checkVariants}
      />
    </motion.svg>
  );
}
