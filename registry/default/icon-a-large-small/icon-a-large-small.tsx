"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconALargeSmallProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const smallVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.08 },
  tap: { scale: 0.96 },
};

const largeVariants = {
  rest: { scale: 1 },
  hover: { scale: 0.96 },
  tap: { scale: 0.94 },
};

export function IconALargeSmall({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconALargeSmallProps) {
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
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.g
        variants={smallVariants}
        style={{ originX: "70%", originY: "40%" }}
      >
        <path d="M21 14h-5" />
        <path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
      </motion.g>
      <motion.g variants={largeVariants} style={{ originX: "30%", originY: "70%" }}>
        <path d="M4.5 13h6" />
        <path d="m3 16 4.5-9 4.5 9" />
      </motion.g>
    </motion.svg>
  );
}
