"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSearchProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const searchVariants: Variants = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: {
    scale: 1.1,
    x: -1,
    y: -1,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    scale: 0.95,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconSearch({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSearchProps) {
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
      variants={searchVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </motion.svg>
  );
}
