"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowUpRightFromCircleProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const circleVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 4 },
  tap: { rotate: 6 },
};

const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 2, y: -2 },
  tap: { x: 4, y: -4 },
};

export function IconArrowUpRightFromCircle({ size = 24, strokeWidth = 2, className, ...props }: IconArrowUpRightFromCircleProps) {
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
      <motion.path d="M22 12A10 10 0 1 1 12 2" variants={circleVariants} style={{ originX: 0.5, originY: 0.5 }} />
      <motion.g variants={arrowVariants}>
        <path d="M22 2 12 12" />
        <path d="M16 2h6v6" />
      </motion.g>
    </motion.svg>
  );
}
