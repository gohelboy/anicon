"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAlignEndVerticalProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const blockVariants = {
  rest: { y: 0 },
  hover: { y: 1.5 },
  tap: { y: -1 },
};

const guideVariants = {
  rest: { opacity: 0.7 },
  hover: { opacity: 1 },
  tap: { opacity: 0.6 },
};

export function IconAlignEndVertical({ size = 24, strokeWidth = 2, className, ...props }: IconAlignEndVerticalProps) {
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
      <motion.rect width="16" height="6" x="2" y="4" rx="2" variants={blockVariants} />
      <motion.rect width="9" height="6" x="9" y="14" rx="2" variants={blockVariants} />
      <motion.path d="M22 22V2" variants={guideVariants} />
    </motion.svg>
  );
}
