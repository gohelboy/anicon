"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBadgeXProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const badgeVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: [1, 1.06, 1], transition: { duration: 0.55, ease: "easeInOut" } },
};

const xVariants: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: [0, 90], transition: { duration: 0.35, ease: "easeInOut" } },
};

export function IconBadgeX({ size = 24, strokeWidth = 2, className, ...props }: IconBadgeXProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial={prefersReducedMotion ? false : "rest"} whileHover={prefersReducedMotion ? undefined : "hover"} whileTap={prefersReducedMotion ? undefined : "tap"} className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()} style={{ overflow: "visible" }} {...rest}>
      <motion.path d="m12 3 2.2 1.3 2.6-.2 1.3 2.2 2.2 1.3-.2 2.6 1.3 2.2-1.3 2.2.2 2.6-2.2 1.3-1.3 2.2-2.6-.2L12 21l-2.2-1.3-2.6.2-1.3-2.2-2.2-1.3.2-2.6L2.6 12l1.3-2.2-.2-2.6 2.2-1.3 1.3-2.2 2.6.2Z" variants={badgeVariants} />
      <motion.path d="m9.5 9.5 5 5" variants={xVariants} />
      <motion.path d="m14.5 9.5-5 5" variants={xVariants} />
    </motion.svg>
  );
}
