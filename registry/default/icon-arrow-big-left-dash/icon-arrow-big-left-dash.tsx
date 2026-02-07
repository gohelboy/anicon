"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowBigLeftDashProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: -2 },
  tap: { x: -4 },
};

const dashVariants = {
  rest: { scaleY: 1 },
  hover: { scaleY: 1.2 },
  tap: { scaleY: 0.9 },
};

export function IconArrowBigLeftDash({ size = 24, strokeWidth = 2, className, ...props }: IconArrowBigLeftDashProps) {
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
      <motion.path d="M19 15V9" variants={dashVariants} style={{ originX: "50%", originY: "50%" }} />
      <motion.path d="M15 15h-3v4l-7-7 7-7v4h3v6z" variants={arrowVariants} />
    </motion.svg>
  );
}
