"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPlayProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const playVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.15,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    scale: 0.9,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconPlay({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconPlayProps) {
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
      variants={playVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </motion.svg>
  );
}
