"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowLeftCircleProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const circleVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
  tap: { scale: 0.96 },
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: -2 },
  tap: { x: -4 },
};

export function IconArrowLeftCircle({ size = 24, strokeWidth = 2, className, ...props }: IconArrowLeftCircleProps) {
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
      <motion.circle cx="12" cy="12" r="10" variants={circleVariants} />
      <motion.g variants={arrowVariants}>
        <path d="M16 12H8" />
        <path d="m12 8-4 4 4 4" />
      </motion.g>
    </motion.svg>
  );
}
