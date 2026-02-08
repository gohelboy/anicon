"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLayers2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const topLayerVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -3, 0],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const bottomLayerVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.7, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconLayers2({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLayers2Props) {
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
        d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z" 
        variants={topLayerVariants}
      />
      <motion.path 
        d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845" 
        variants={bottomLayerVariants}
      />
    </motion.svg>
  );
}
