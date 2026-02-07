"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowUpSquareProps extends React.SVGProps<SVGSVGElement> {
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
  rest: { y: 0 },
  hover: { y: -2 },
  tap: { y: -4 },
};

export function IconArrowUpSquare({ size = 24, strokeWidth = 2, className, ...props }: IconArrowUpSquareProps) {
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
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </motion.g>
    </motion.svg>
  );
}
