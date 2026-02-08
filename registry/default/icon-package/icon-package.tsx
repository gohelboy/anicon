"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPackageProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const lidVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const boxVariants: Variants = {
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

export function IconPackage({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconPackageProps) {
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
      <motion.path 
        d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" 
        variants={boxVariants}
      />
      <motion.path d="M12 22V12" variants={boxVariants} />
      <motion.polyline points="3.29 7 12 12 20.71 7" variants={lidVariants} />
      <motion.path d="m7.5 4.27 9 5.15" variants={lidVariants} />
    </motion.svg>
  );
}
