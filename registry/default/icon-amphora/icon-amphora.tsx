"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAmphoraProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const bodyVariants = {
  rest: { rotate: 0 },
  hover: { rotate: -3 },
  tap: { rotate: 3 },
};

const handleVariants = {
  rest: { x: 0 },
  hover: { x: -0.5 },
  tap: { x: 0.5 },
};

const rimVariants = {
  rest: { scaleX: 1 },
  hover: { scaleX: 1.08 },
  tap: { scaleX: 0.95 },
};

export function IconAmphora({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAmphoraProps) {
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
      <motion.path d="M9 2h6" variants={rimVariants} style={{ originX: "50%", originY: "50%" }} />
      <motion.g variants={bodyVariants} style={{ originX: "50%", originY: "60%" }}>
        <path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" />
        <path d="M18 22H6" />
      </motion.g>
      <motion.path d="M10 5H8a2 2 0 0 0 0 4h.68" variants={handleVariants} />
      <motion.path d="M14 5h2a2 2 0 0 1 0 4h-.68" variants={handleVariants} />
    </motion.svg>
  );
}
