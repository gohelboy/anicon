"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowDownZAProps extends React.SVGProps<SVGSVGElement> {
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

const letterVariants = {
  rest: { x: 0 },
  hover: { x: 1 },
  tap: { x: 2 },
};

export function IconArrowDownZA({ size = 24, strokeWidth = 2, className, ...props }: IconArrowDownZAProps) {
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
        <path d="M7 4v16" />
      </motion.g>
      <motion.g variants={letterVariants}>
        <path d="M15 4h5l-5 6h5" />
        <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
        <path d="M20 18h-5" />
      </motion.g>
    </motion.svg>
  );
}
