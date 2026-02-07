"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconShareProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Share nodes spread outward
const node1Variants: Variants = {
  rest: { x: 0, y: 0, scale: 1 },
  hover: {
    x: 2,
    y: -3,
    scale: 1.15,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

const node2Variants: Variants = {
  rest: { x: 0, y: 0, scale: 1 },
  hover: {
    x: 2,
    y: 3,
    scale: 1.15,
    transition: { type: "spring", stiffness: 400, damping: 15, delay: 0.05 },
  },
};

const centerVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.2, 1],
    transition: { duration: 0.3 },
  },
};

export function IconShare({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconShareProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-4 -4 32 32"
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
      {/* Center node - pulses */}
      <motion.circle cx="6" cy="12" r="3" variants={centerVariants} />
      
      {/* Top node - spreads up-right */}
      <motion.circle cx="18" cy="6" r="3" variants={node1Variants} />
      
      {/* Bottom node - spreads down-right */}
      <motion.circle cx="18" cy="18" r="3" variants={node2Variants} />
      
      {/* Connection lines */}
      <line x1="8.59" x2="15.42" y1="10.51" y2="7.49" />
      <line x1="8.59" x2="15.42" y1="13.49" y2="16.51" />
    </motion.svg>
  );
}
