"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAArrowUpProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const arrowVariants = {
  rest: { y: 0 },
  hover: { y: -2 },
  tap: { y: -1, scale: 0.96 },
};

export function IconAArrowUp({ size = 24, strokeWidth = 2, className, ...props }: IconAArrowUpProps) {
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
      transition={{ type: "spring", stiffness: 420, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <path d="M3.5 13h6" />
      <path d="m2 16 4.5-9 4.5 9" />
      <motion.g variants={arrowVariants} style={{ originX: "50%", originY: "50%" }}>
        <path d="M18 16V7" />
        <path d="m14 11 4-4 4 4" />
      </motion.g>
    </motion.svg>
  );
}
