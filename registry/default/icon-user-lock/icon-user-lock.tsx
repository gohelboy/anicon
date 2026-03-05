"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const userVariants: Variants = {
  rest: { y: 0 },
  hover: { y: [0, -1, 0], transition: { duration: 0.6, ease: "easeInOut" } },
};

const lockVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: [1, 1.1, 1], transition: { duration: 0.6, ease: "easeInOut" } },
};

export function IconUserLock({ size = 24, strokeWidth = 2, className, ...props }: IconUserLockProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial={prefersReducedMotion ? false : "rest"} whileHover={prefersReducedMotion ? undefined : "hover"} whileTap={prefersReducedMotion ? undefined : "tap"} className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()} style={{ overflow: "visible" }} {...rest}>
      <motion.circle cx="8" cy="8" r="3" variants={userVariants} />
      <motion.path d="M3 18a5 5 0 0 1 8.5-3.5" variants={userVariants} />
      <motion.path d="M15 12v-1a2 2 0 1 1 4 0v1" variants={lockVariants} />
      <motion.rect x="14" y="12" width="6" height="5" rx="1" variants={lockVariants} />
    </motion.svg>
  );
}
