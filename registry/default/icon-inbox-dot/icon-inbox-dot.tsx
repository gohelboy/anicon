"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconInboxDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const inboxVariants: Variants = {
  rest: { y: 0 },
  hover: { y: [0, -1.2, 0], transition: { duration: 0.6, ease: "easeInOut" } },
};

const dotVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6], transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" } },
};

export function IconInboxDot({ size = 24, strokeWidth = 2, className, ...props }: IconInboxDotProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial={prefersReducedMotion ? false : "rest"} whileHover={prefersReducedMotion ? undefined : "hover"} whileTap={prefersReducedMotion ? undefined : "tap"} className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()} style={{ overflow: "visible" }} {...rest}>
      <motion.path d="M4 6h16v10a2 2 0 0 1-2 2h-4l-2-2-2 2H6a2 2 0 0 1-2-2z" variants={inboxVariants} />
      <motion.circle cx="18" cy="6" r="2" variants={dotVariants} />
    </motion.svg>
  );
}
