"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAlignJustifyProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const lineVariants = {
  rest: { scaleX: 1, y: 0 },
  hover: { scaleX: 1.08, y: 0 },
  tap: { scaleX: 0.95, y: 0 },
};

const topVariants = {
  rest: { y: 0 },
  hover: { y: -0.8 },
  tap: { y: 0.8 },
};

const bottomVariants = {
  rest: { y: 0 },
  hover: { y: 0.8 },
  tap: { y: -0.8 },
};

export function IconAlignJustify({ size = 24, className, ...props }: IconAlignJustifyProps) {
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
      transition={{ type: "spring", stiffness: 300, damping: 16 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.path d="M3 6h18" variants={topVariants} style={{ originX: "50%", originY: "50%" }} />
      <motion.path d="M3 12h18" variants={lineVariants} style={{ originX: "50%", originY: "50%" }} />
      <motion.path d="M3 18h18" variants={bottomVariants} style={{ originX: "50%", originY: "50%" }} />
    </motion.svg>
  );
}
