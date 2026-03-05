"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBookmarkCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const markVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.04, 1],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const checkVariants: Variants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0.2, 1],
    opacity: [0.5, 1],
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function IconBookmarkCheck({ size = 24, strokeWidth = 2, className, ...props }: IconBookmarkCheckProps) {
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
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <motion.path d="M7 4h10a1 1 0 0 1 1 1v15l-6-3-6 3V5a1 1 0 0 1 1-1Z" variants={markVariants} />
      <motion.path d="m10 10 2 2 3-3" variants={checkVariants} />
    </motion.svg>
  );
}
