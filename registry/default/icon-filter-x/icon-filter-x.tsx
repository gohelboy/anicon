"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFilterXProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const funnelVariants: Variants = {
  rest: { y: 0 },
  hover: { y: [0, -1, 0], transition: { duration: 0.6, ease: "easeInOut" } },
};

const xVariants: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: [0, 90], transition: { duration: 0.35, ease: "easeInOut" } },
};

export function IconFilterX({ size = 24, strokeWidth = 2, className, ...props }: IconFilterXProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial={prefersReducedMotion ? false : "rest"} whileHover={prefersReducedMotion ? undefined : "hover"} whileTap={prefersReducedMotion ? undefined : "tap"} className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()} style={{ overflow: "visible" }} {...rest}>
      <motion.path d="M4 5h16l-6 7v6l-4-2v-4Z" variants={funnelVariants} />
      <motion.path d="m16 9 4 4" variants={xVariants} style={{ originX: "18px", originY: "11px" }} />
      <motion.path d="m20 9-4 4" variants={xVariants} style={{ originX: "18px", originY: "11px" }} />
    </motion.svg>
  );
}
