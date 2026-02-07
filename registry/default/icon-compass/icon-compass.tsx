"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCompassProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const needleVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 360, 315],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

export function IconCompass({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCompassProps) {
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
      <circle cx="12" cy="12" r="10" />
      <motion.polygon 
        points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" 
        variants={needleVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
    </motion.svg>
  );
}
