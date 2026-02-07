"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconActivitySquareProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const frameVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
};

const pulseVariants = {
  rest: { y: 0 },
  hover: { y: -1.5 },
  tap: { y: 1 },
};

export function IconActivitySquare({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconActivitySquareProps) {
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
      transition={{ type: "spring", stiffness: 340, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
        variants={frameVariants}
      />
      <motion.path d="M17 12h-2l-2 5-2-10-2 5H7" variants={pulseVariants} />
    </motion.svg>
  );
}
