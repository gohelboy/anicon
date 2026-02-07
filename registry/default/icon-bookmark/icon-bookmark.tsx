"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBookmarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Bookmark folds down like placing a real bookmark
const bookmarkVariants: Variants = {
  rest: { y: 0, scaleY: 1 },
  hover: {
    y: 3,
    scaleY: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    y: 5,
    scaleY: 1.08,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

export function IconBookmark({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBookmarkProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 28 30"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={bookmarkVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      style={{ originY: "0%", overflow: "visible" }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </motion.svg>
  );
}
