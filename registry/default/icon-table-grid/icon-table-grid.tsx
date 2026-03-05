"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTableGridProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const cellVariants = (delay: number): Variants => ({
  rest: { scale: 1 },
  hover: { scale: [1, 1.06, 1], transition: { duration: 0.35, delay, ease: "easeInOut" } },
});

export function IconTableGrid({ size = 24, strokeWidth = 2, className, ...props }: IconTableGridProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial={prefersReducedMotion ? false : "rest"} whileHover={prefersReducedMotion ? undefined : "hover"} whileTap={prefersReducedMotion ? undefined : "tap"} className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()} style={{ overflow: "visible" }} {...rest}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <motion.path d="M3 9h18" variants={cellVariants(0)} />
      <motion.path d="M3 14h18" variants={cellVariants(0.05)} />
      <motion.path d="M9 4v16" variants={cellVariants(0.1)} />
      <motion.path d="M15 4v16" variants={cellVariants(0.15)} />
    </motion.svg>
  );
}
