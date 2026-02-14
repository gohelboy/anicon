"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowUp10Props extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const arrowVariants = {
  rest: { y: 0 },
  hover: { y: -2 },
  tap: { y: -4 },
};

const digitVariants = {
  rest: { x: 0 },
  hover: { x: 1 },
  tap: { x: 2 },
};

export function IconArrowUp10({ size = 24, strokeWidth = 2, className, ...props }: IconArrowUp10Props) {
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
      <motion.g variants={arrowVariants}>
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
      </motion.g>
      <motion.g variants={digitVariants}>
        <path d="M17 10V4h-2" />
        <path d="M15 10h4" />
        <rect x="15" y="14" width="4" height="6" ry="2" />
      </motion.g>
    </motion.svg>
  );
}
