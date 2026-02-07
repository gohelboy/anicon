"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAngryProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const faceVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
};

const browVariants = {
  rest: { rotate: 0 },
  hover: { rotate: -8 },
  tap: { rotate: 8 },
};

const mouthVariants = {
  rest: { y: 0 },
  hover: { y: 1 },
  tap: { y: -1 },
};

export function IconAngry({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAngryProps) {
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
      <motion.circle cx="12" cy="12" r="10" variants={faceVariants} />
      <motion.path d="M7.5 8 10 9" variants={browVariants} style={{ originX: "40%", originY: "40%" }} />
      <motion.path d="m14 9 2.5-1" variants={browVariants} style={{ originX: "60%", originY: "40%" }} />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <motion.path d="M16 16s-1.5-2-4-2-4 2-4 2" variants={mouthVariants} />
    </motion.svg>
  );
}
