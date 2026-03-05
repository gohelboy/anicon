"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTagMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const tagVariants: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: [0, -5, 0], transition: { duration: 0.6, ease: "easeInOut" } },
};

const minusVariants: Variants = {
  rest: { scaleX: 1 },
  hover: { scaleX: [1, 1.25, 1], transition: { duration: 0.5, ease: "easeInOut" } },
};

export function IconTagMinus({ size = 24, strokeWidth = 2, className, ...props }: IconTagMinusProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial={prefersReducedMotion ? false : "rest"} whileHover={prefersReducedMotion ? undefined : "hover"} whileTap={prefersReducedMotion ? undefined : "tap"} className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()} style={{ overflow: "visible" }} {...rest}>
      <motion.path d="M11 4H6a2 2 0 0 0-2 2v5l8 8 8-8-7-7z" variants={tagVariants} style={{ originX: "12px", originY: "11px" }} />
      <path d="M7.5 7.5h.01" />
      <motion.path d="M12 10h4" variants={minusVariants} style={{ originX: "14px", originY: "10px" }} />
    </motion.svg>
  );
}
