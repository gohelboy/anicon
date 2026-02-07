"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowDownNarrowWideProps extends React.SVGProps<SVGSVGElement> {
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

const barsVariants = {
  rest: { x: 0 },
  hover: { x: 1 },
  tap: { x: -1 },
};

export function IconArrowDownNarrowWide({ size = 24, strokeWidth = 2, className, ...props }: IconArrowDownNarrowWideProps) {
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
        <path d="m3 16 4 4 4-4" />
        <path d="M7 20V4" />
      </motion.g>
      <motion.g variants={barsVariants}>
        <path d="M11 4h4" />
        <path d="M11 8h7" />
        <path d="M11 12h10" />
      </motion.g>
    </motion.svg>
  );
}
