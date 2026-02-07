"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowDownToLineProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const arrowVariants = {
  rest: { y: 0 },
  hover: { y: 2 },
  tap: { y: 4 },
};

const lineVariants = {
  rest: { scaleX: 1 },
  hover: { scaleX: 1.08 },
  tap: { scaleX: 0.96 },
};

export function IconArrowDownToLine({ size = 24, strokeWidth = 2, className, ...props }: IconArrowDownToLineProps) {
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
        <path d="M12 17V3" />
        <path d="m6 11 6 6 6-6" />
      </motion.g>
      <motion.path d="M19 21H5" variants={lineVariants} style={{ originX: 0.5 }} />
    </motion.svg>
  );
}
