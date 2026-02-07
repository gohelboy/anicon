"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowBigUpDashProps extends React.SVGProps<SVGSVGElement> {
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

const dashVariants = {
  rest: { scaleX: 1 },
  hover: { scaleX: 1.2 },
  tap: { scaleX: 0.9 },
};

export function IconArrowBigUpDash({ size = 24, strokeWidth = 2, className, ...props }: IconArrowBigUpDashProps) {
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
      <motion.path d="M9 19h6" variants={dashVariants} style={{ originX: "50%", originY: "50%" }} />
      <motion.path d="M9 15v-3H5l7-7 7 7h-4v3H9z" variants={arrowVariants} />
    </motion.svg>
  );
}
