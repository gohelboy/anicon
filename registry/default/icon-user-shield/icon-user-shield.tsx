"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserShieldProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const userVariants: Variants = {
  rest: { y: 0 },
  hover: { y: [0, -1, 0], transition: { duration: 0.6, ease: "easeInOut" } },
};

const shieldVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: [1, 1.08, 1], transition: { duration: 0.65, ease: "easeInOut" } },
};

export function IconUserShield({ size = 24, strokeWidth = 2, className, ...props }: IconUserShieldProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial={prefersReducedMotion ? false : "rest"} whileHover={prefersReducedMotion ? undefined : "hover"} whileTap={prefersReducedMotion ? undefined : "tap"} className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()} style={{ overflow: "visible" }} {...rest}>
      <motion.circle cx="8" cy="8" r="3" variants={userVariants} />
      <motion.path d="M3 18a5 5 0 0 1 10 0" variants={userVariants} />
      <motion.path d="M16 10 12.5 12v3.5c0 2.7 1.8 4.3 3.5 5 1.7-.7 3.5-2.3 3.5-5V12z" variants={shieldVariants} />
    </motion.svg>
  );
}
