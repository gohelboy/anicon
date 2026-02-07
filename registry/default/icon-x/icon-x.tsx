"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconXProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const xVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 90,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    rotate: 90,
    scale: 0.9,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconX({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconXProps) {
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
      variants={xVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </motion.svg>
  );
}
