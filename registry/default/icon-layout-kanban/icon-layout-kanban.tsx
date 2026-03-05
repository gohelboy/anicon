"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLayoutKanbanProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const colVariants = (delay: number): Variants => ({
  rest: { y: 0 },
  hover: { y: [0, -1.5, 0], transition: { duration: 0.5, delay, ease: "easeInOut" } },
});

export function IconLayoutKanban({ size = 24, strokeWidth = 2, className, ...props }: IconLayoutKanbanProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial={prefersReducedMotion ? false : "rest"} whileHover={prefersReducedMotion ? undefined : "hover"} whileTap={prefersReducedMotion ? undefined : "tap"} className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()} style={{ overflow: "visible" }} {...rest}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <motion.path d="M8 4v16" variants={colVariants(0)} />
      <motion.path d="M16 4v16" variants={colVariants(0.08)} />
      <motion.path d="M5 8h2" variants={colVariants(0)} />
      <motion.path d="M13 11h2" variants={colVariants(0.08)} />
      <motion.path d="M17 7h2" variants={colVariants(0.16)} />
    </motion.svg>
  );
}
