"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconNotificationDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bellVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -10, 10, -7, 7, 0],
    transition: { duration: 0.55, ease: "easeInOut" },
  },
};

const dotVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: [1, 1.25, 1],
    opacity: [0.7, 1, 0.7],
    transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconNotificationDot({ size = 24, strokeWidth = 2, className, ...props }: IconNotificationDotProps) {
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
      <motion.g variants={bellVariants} style={{ originX: "12px", originY: "8px" }}>
        <path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 8 2.5 8h-17S6 15 6 9" />
        <path d="M10 20a2 2 0 0 0 4 0" />
      </motion.g>
      <motion.circle cx="18" cy="6" r="2" variants={dotVariants} />
    </motion.svg>
  );
}
