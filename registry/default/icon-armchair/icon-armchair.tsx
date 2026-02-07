"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconArmchairProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const backVariants = {
  rest: { y: 0 },
  hover: { y: -1 },
  tap: { y: 1 },
};

const seatVariants = {
  rest: { scaleY: 1 },
  hover: { scaleY: 1.03 },
  tap: { scaleY: 0.97 },
};

const legVariants = {
  rest: { y: 0 },
  hover: { y: 1 },
  tap: { y: -1 },
};

export function IconArmchair({ size = 24, strokeWidth = 2, className, ...props }: IconArmchairProps) {
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
      <motion.path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" variants={backVariants} />
      <motion.path
        d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
        variants={seatVariants}
        style={{ originX: "50%", originY: "70%" }}
      />
      <motion.path d="M5 18v2" variants={legVariants} />
      <motion.path d="M19 18v2" variants={legVariants} />
    </motion.svg>
  );
}
