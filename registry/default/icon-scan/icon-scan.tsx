"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconScanProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const cornerVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const scanLineVariants: Variants = {
  rest: { y: 0, opacity: 0 },
  hover: {
    y: [7, 17, 7],
    opacity: [0, 1, 0.5, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconScan({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconScanProps) {
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
      {/* Corner Brackets */}
      <motion.path d="M3 7V5a2 2 0 0 1 2-2h2" variants={cornerVariants} />
      <motion.path d="M17 3h2a2 2 0 0 1 2 2v2" variants={cornerVariants} />
      <motion.path d="M21 17v2a2 2 0 0 1-2 2h-2" variants={cornerVariants} />
      <motion.path d="M7 21H5a2 2 0 0 1-2-2v-2" variants={cornerVariants} />
      
      {/* Top-to-Bottom Scan Line */}
      <motion.path 
        d="M7 0h10" 
        variants={scanLineVariants}
        strokeWidth={strokeWidth}
        className="text-primary"
      />
    </motion.svg>
  );
}
