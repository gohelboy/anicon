"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowLeftRightProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const leftVariants = {
  rest: { x: 0 },
  hover: { x: -2 },
  tap: { x: -4 },
};

const rightVariants = {
  rest: { x: 0 },
  hover: { x: 2 },
  tap: { x: 4 },
};

export function IconArrowLeftRight({ size = 24, strokeWidth = 2, className, ...props }: IconArrowLeftRightProps) {
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
      <motion.g variants={leftVariants}>
        <path d="M8 3 4 7l4 4" />
        <path d="M4 7h16" />
      </motion.g>
      <motion.g variants={rightVariants}>
        <path d="m16 21 4-4-4-4" />
        <path d="M20 17H4" />
      </motion.g>
    </motion.svg>
  );
}
