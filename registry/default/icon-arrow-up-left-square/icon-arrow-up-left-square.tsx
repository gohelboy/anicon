"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowUpLeftSquareProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const squareVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04 },
  tap: { scale: 0.96 },
};

const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: -2, y: -2 },
  tap: { x: -4, y: -4 },
};

export function IconArrowUpLeftSquare({ size = 24, strokeWidth = 2, className, ...props }: IconArrowUpLeftSquareProps) {
  const {
    onAnimationStart,
    onAnimationEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    ...rest
  } = props;
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
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.rect width="18" height="18" x="3" y="3" rx="2" variants={squareVariants} />
      <motion.g variants={arrowVariants}>
        <path d="M8 16V8h8" />
        <path d="M16 16 8 8" />
      </motion.g>
    </motion.svg>
  );
}
