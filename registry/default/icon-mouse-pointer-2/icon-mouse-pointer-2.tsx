"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMousePointer2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pointerVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -5, 5, 0],
    scale: 1.1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const tailVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export function IconMousePointer2({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMousePointer2Props) {
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
      {/* Official Lucide Mouse Pointer 2 Paths */}
      <motion.path 
        d="m4 4 7.07 16.97 2.51-7.39 7.39-2.51L4 4z" 
        variants={pointerVariants}
        style={{ originX: "4px", originY: "4px" }}
      />
      <motion.path 
        d="m13.41 13.41 6.59 6.59" 
        variants={tailVariants}
      />
    </motion.svg>
  );
}
