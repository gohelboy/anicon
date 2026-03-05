"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBookmarkPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const markVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -1.5, 0],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const plusVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 90,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

export function IconBookmarkPlus({ size = 24, strokeWidth = 2, className, ...props }: IconBookmarkPlusProps) {
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
      <motion.path d="M12 7v4" variants={plusVariants} style={{ originX: "12px", originY: "9px" }} />
      <motion.path d="M10 9h4" variants={plusVariants} style={{ originX: "12px", originY: "9px" }} />
    </motion.svg>
  );
}
