"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowLeftFromLineProps extends React.SVGProps<SVGSVGElement> {
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

const lineVariants = {
  rest: { scaleY: 1 },
  hover: { scaleY: 0.92 },
  tap: { scaleY: 0.84 },
};

export function IconArrowLeftFromLine({ size = 24, strokeWidth = 2, className, ...props }: IconArrowLeftFromLineProps) {
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
        <path d="m9 6-6 6 6 6" />
        <path d="M3 12h14" />
      </motion.g>
      <motion.path d="M21 19V5" variants={lineVariants} style={{ originY: 0.5 }} />
    </motion.svg>
  );
}
