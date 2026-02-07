"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBellProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const bellVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -20, 20, -15, 15, -10, 10, -5, 5, 0],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  tap: {
    rotate: [0, -25, 25, -20, 20, -15, 15, 0],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export function IconBell({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBellProps) {
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
      variants={bellVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      style={{ originX: "50%", originY: "0%" }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </motion.svg>
  );
}
