"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUnlockProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const shackleVariants: Variants = {
  // Starts open
  rest: { y: -4, x: 2, rotate: -15 },
  // Closes on hover
  hover: {
    y: 0,
    x: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    y: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconUnlock({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUnlockProps) {
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
      viewBox="-2 -8 28 34"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      {/* Lock body - static */}
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      {/* Keyhole */}
      <circle cx="12" cy="16" r="1" />
      
      {/* Shackle - starts open, closes on hover */}
      <motion.path
        d="M7 11V7a5 5 0 0 1 9.9-1"
        variants={shackleVariants}
        style={{ originX: "85%", originY: "100%" }}
      />
    </motion.svg>
  );
}
