"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAmpersandsProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const leftVariants = {
  rest: { scale: 1, x: 0 },
  hover: { scale: 1.05, x: -0.5 },
  tap: { scale: 0.95, x: 0.5 },
};

const rightVariants = {
  rest: { scale: 1, x: 0 },
  hover: { scale: 1.05, x: 0.5 },
  tap: { scale: 0.95, x: -0.5 },
};

export function IconAmpersands({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAmpersandsProps) {
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
      <motion.path
        d="M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
        variants={leftVariants}
        style={{ originX: "30%", originY: "60%" }}
      />
      <motion.path
        d="M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
        variants={rightVariants}
        style={{ originX: "70%", originY: "60%" }}
      />
    </motion.svg>
  );
}
