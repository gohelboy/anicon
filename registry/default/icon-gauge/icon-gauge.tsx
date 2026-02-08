"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconGaugeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const needleVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 70, 50, 70],
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export function IconGauge({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconGaugeProps) {
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
        d="m12 14 4-4" 
        variants={needleVariants} 
        style={{ originX: "12px", originY: "14px" }}
      />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </motion.svg>
  );
}
