"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAnnoyedProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const faceVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

const mouthVariants = {
  rest: { y: 0 },
  hover: { y: 1 },
  tap: { y: -1 },
};

const eyeVariants = {
  rest: { x: 0 },
  hover: { x: 0.5 },
  tap: { x: -0.5 },
};

export function IconAnnoyed({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAnnoyedProps) {
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
      <motion.path d="M8 9h2" variants={eyeVariants} />
      <motion.path d="M14 9h2" variants={eyeVariants} />
      <motion.path d="M8 15h8" variants={mouthVariants} />
    </motion.svg>
  );
}
