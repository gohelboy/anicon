"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFerrisWheelProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const wheelVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconFerrisWheel({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconFerrisWheelProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
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
      style={{ overflow: "visible" }}
      {...rest}
    >
      <motion.g variants={wheelVariants} style={{ originX: "12px", originY: "12px" }}>
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4" />
        <path d="m6.8 15-3.5 2" />
        <path d="m20.7 7-3.5 2" />
        <path d="M6.8 9 3.3 7" />
        <path d="m20.7 17-3.5-2" />
        <path d="M18 18.7a9 9 0 1 0-12 0" />
      </motion.g>
      {/* Static stand */}
      <path d="m9 22 3-8 3 8" />
      <path d="M8 22h8" />
    </motion.svg>
  );
}
