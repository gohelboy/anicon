"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAlignLeftProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const lineVariants = {
  rest: { x: 0, scaleX: 1 },
  hover: { x: -1.5, scaleX: 0.95 },
  tap: { x: 1, scaleX: 1.02 },
};

export function IconAlignLeft({ size = 24, strokeWidth = 2, className, ...props }: IconAlignLeftProps) {
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
      <motion.path d="M21 6H3" variants={lineVariants} style={{ originX: 0, originY: "50%" }} />
      <motion.path d="M15 12H3" variants={lineVariants} style={{ originX: 0, originY: "50%" }} />
      <motion.path d="M17 18H3" variants={lineVariants} style={{ originX: 0, originY: "50%" }} />
    </motion.svg>
  );
}
