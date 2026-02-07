"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAlertCircleProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const ringVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04 },
  tap: { scale: 0.98 },
};

const markVariants = {
  rest: { y: 0 },
  hover: { y: -1 },
  tap: { y: 1 },
};

export function IconAlertCircle({
  size = 24,
  className,
  ...props
}: IconAlertCircleProps) {
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      transition={{ type: "spring", stiffness: 360, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.circle cx="12" cy="12" r="10" variants={ringVariants} />
      <motion.line x1="12" x2="12" y1="8" y2="12" variants={markVariants} />
      <motion.line x1="12" x2="12.01" y1="16" y2="16" variants={markVariants} />
    </motion.svg>
  );
}
