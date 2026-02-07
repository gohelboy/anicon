"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFrownProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const faceVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const mouthVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [1, 0.8, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function IconFrown({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconFrownProps) {
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
      variants={faceVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible", originX: "12px", originY: "12px" }}
      {...restOptions}
    >
      <circle cx="12" cy="12" r="10" />
      <motion.path 
        d="M16 16s-1.5-2-4-2-4 2-4 2" 
        variants={mouthVariants}
      />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </motion.svg>
  );
}
