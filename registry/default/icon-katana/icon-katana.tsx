"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconKatanaProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bladeVariants: Variants = {
  rest: { rotate: 0, x: 0 },
  hover: {
    rotate: [0, -14, 0],
    x: [0, -1.5, 0],
    transition: { duration: 0.45, ease: "easeInOut" },
  },
  tap: {
    rotate: -18,
    x: -2,
    transition: { duration: 0.12, ease: "easeOut" },
  },
};

export function IconKatana({ size = 24, strokeWidth = 2, className, ...props }: IconKatanaProps) {
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
      <motion.g variants={bladeVariants} style={{ originX: "18px", originY: "18px" }}>
        <path d="m4 6 10 10" />
        <path d="m6 4 12 12" />
        <path d="m15 15 3-3 2 2-3 3" />
        <path d="m18 18 2 2" />
      </motion.g>
    </motion.svg>
  );
}
