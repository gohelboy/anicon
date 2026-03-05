"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTableRowsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rowVariants = (delay: number): Variants => ({
  rest: { x: 0 },
  hover: { x: [0, 1.5, 0], transition: { duration: 0.45, delay, ease: "easeInOut" } },
});

export function IconTableRows({ size = 24, strokeWidth = 2, className, ...props }: IconTableRowsProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial={prefersReducedMotion ? false : "rest"} whileHover={prefersReducedMotion ? undefined : "hover"} whileTap={prefersReducedMotion ? undefined : "tap"} className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()} style={{ overflow: "visible" }} {...rest}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <motion.path d="M3 8h18" variants={rowVariants(0)} />
      <motion.path d="M3 12h18" variants={rowVariants(0.08)} />
      <motion.path d="M3 16h18" variants={rowVariants(0.16)} />
    </motion.svg>
  );
}
