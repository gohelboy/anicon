"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowDownLeftFromCircleProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const circleVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: -2, y: 2 },
  tap: { x: -4, y: 4 },
};

export function IconArrowDownLeftFromCircle({ size = 24, strokeWidth = 2, className, ...props }: IconArrowDownLeftFromCircleProps) {
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
      <motion.path d="M2 12a10 10 0 1 1 10 10" variants={circleVariants} />
      <motion.g variants={arrowVariants}>
        <path d="m2 22 10-10" />
        <path d="M8 22H2v-6" />
      </motion.g>
    </motion.svg>
  );
}
