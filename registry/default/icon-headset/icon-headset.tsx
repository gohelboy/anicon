"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHeadsetProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const headbandVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.04, 1],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const earpadVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, 1, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconHeadset({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconHeadsetProps) {
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
      <motion.path 
        d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" 
        variants={headbandVariants}
        style={{ originX: "12px", originY: "4px" }}  
      />
      <motion.path 
        d="M21 16v2a4 4 0 0 1-4 4h-5" 
        variants={earpadVariants}
      />
    </motion.svg>
  );
}
