"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSailboatProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rockVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 3, -3, 2, -2, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const hullVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, 1, -1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSailboat({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSailboatProps) {
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
      {/* Sail & Mast */}
      <motion.g variants={rockVariants} style={{ originX: "10px", originY: "17px" }}>
        <path d="M10 2v15" />
        <path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" />
      </motion.g>
      {/* Hull */}
      <motion.path 
        d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" 
        variants={hullVariants}
      />
    </motion.svg>
  );
}
