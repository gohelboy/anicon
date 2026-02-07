"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconRefreshCwProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Full rotation like refreshing
const refreshVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  tap: {
    rotate: 720,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export function IconRefreshCw({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconRefreshCwProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={refreshVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </motion.svg>
  );
}
