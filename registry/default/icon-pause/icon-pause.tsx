"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPauseProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const leftBarVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: -2,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    x: -3,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

const rightBarVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: 2,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    x: 3,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconPause({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconPauseProps) {
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
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.rect x="14" y="4" width="4" height="16" rx="1" variants={rightBarVariants} />
      <motion.rect x="6" y="4" width="4" height="16" rx="1" variants={leftBarVariants} />
    </motion.svg>
  );
}
