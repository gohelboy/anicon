"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLayoutColumnsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const paneVariants: Variants = {
  rest: { x: 0 },
  hover: { x: [0, 1.5, 0], transition: { duration: 0.6, ease: "easeInOut" } },
};

export function IconLayoutColumns({ size = 24, strokeWidth = 2, className, ...props }: IconLayoutColumnsProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial={prefersReducedMotion ? false : "rest"} whileHover={prefersReducedMotion ? undefined : "hover"} whileTap={prefersReducedMotion ? undefined : "tap"} className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()} style={{ overflow: "visible" }} {...rest}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M12 4v16" />
      <motion.rect x="4.5" y="6" width="6" height="12" rx="1" variants={paneVariants} />
      <motion.rect x="13.5" y="6" width="6" height="12" rx="1" variants={paneVariants} />
    </motion.svg>
  );
}
