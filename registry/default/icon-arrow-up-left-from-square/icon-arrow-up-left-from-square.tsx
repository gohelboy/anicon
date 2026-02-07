"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowUpLeftFromSquareProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const squareVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: -2, y: -2 },
  tap: { x: -4, y: -4 },
};

export function IconArrowUpLeftFromSquare({ size = 24, strokeWidth = 2, className, ...props }: IconArrowUpLeftFromSquareProps) {
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
      <motion.path
        d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"
        variants={squareVariants}
        style={{ originX: 0.5, originY: 0.5 }}
      />
      <motion.g variants={arrowVariants}>
        <path d="m3 3 9 9" />
        <path d="M3 9V3h6" />
      </motion.g>
    </motion.svg>
  );
}
