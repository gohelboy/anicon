"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMailProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const flapVariants: Variants = {
  rest: { rotateX: 0 },
  hover: {
    rotateX: -25,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: {
    rotateX: -40,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export function IconMail({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMailProps) {
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
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ perspective: 100 }}
      {...rest}
    >
      {/* Envelope body - static */}
      <rect width="20" height="16" x="2" y="4" rx="2" />
      {/* Envelope flap - animated */}
      <motion.path
        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        variants={flapVariants}
        style={{ originX: "50%", originY: "0%", transformStyle: "preserve-3d" }}
      />
    </motion.svg>
  );
}
