"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconScanSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const magnifierVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const scanLineVariants: Variants = {
  rest: { y: 0, opacity: 0 },
  hover: {
    y: [-4, 4, -4],
    opacity: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconScanSearch({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconScanSearchProps) {
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
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      
      <motion.g variants={magnifierVariants} style={{ originX: "12px", originY: "12px" }}>
        <circle cx="12" cy="12" r="3" />
        <path d="m16 16-1.9-1.9" />
      </motion.g>

      <motion.line 
        x1="5" y1="12" x2="19" y2="12" 
        stroke="currentColor" 
        strokeWidth={1} 
        variants={scanLineVariants}
      />
    </motion.svg>
  );
}
