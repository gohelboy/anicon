"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAppWindowMacProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const dotVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.3 },
  tap: { scale: 0.9 },
};

const frameVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export function IconAppWindowMac({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAppWindowMacProps) {
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
      <motion.rect width="20" height="16" x="2" y="4" rx="2" variants={frameVariants} />
      <motion.path d="M6 8h.01" variants={dotVariants} />
      <motion.path d="M10 8h.01" variants={dotVariants} />
      <motion.path d="M14 8h.01" variants={dotVariants} />
    </motion.svg>
  );
}
