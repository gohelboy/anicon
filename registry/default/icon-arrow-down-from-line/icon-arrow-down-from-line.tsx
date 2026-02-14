"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArrowDownFromLineProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const lineVariants = {
  rest: { scaleX: 1 },
  hover: { scaleX: 1.1 },
  tap: { scaleX: 0.95 },
};

const arrowVariants = {
  rest: { y: 0 },
  hover: { y: 2 },
  tap: { y: 4 },
};

export function IconArrowDownFromLine({ size = 24, strokeWidth = 2, className, ...props }: IconArrowDownFromLineProps) {
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
      <motion.path d="M19 3H5" variants={prefersReducedMotion ? {} :lineVariants} style={{ originX: "50%", originY: "50%" }} />
      <motion.g variants={prefersReducedMotion ? {} : arrowVariants}>
        <path d="M12 21V7" />
        <path d="m6 15 6 6 6-6" />
      </motion.g>
    </motion.svg>
  );
}
