"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMinusProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const minusVariants: Variants = {
  rest: { scaleX: 1 },
  hover: {
    scaleX: 0.7,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    scaleX: 0.5,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconMinus({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMinusProps) {
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
      variants={minusVariants}
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <path d="M5 12h14" />
    </motion.svg>
  );
}
