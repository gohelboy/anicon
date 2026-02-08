"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCircleHelpProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const circleVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const helpVariants: Variants = {
  rest: { opacity: 1, y: 0 },
  hover: {
    opacity: [1, 0.5, 1],
    y: [0, -0.5, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconCircleHelp({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCircleHelpProps) {
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
      <motion.circle 
        cx="12" cy="12" r="10" 
        variants={circleVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.g variants={helpVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </motion.g>
    </motion.svg>
  );
}
