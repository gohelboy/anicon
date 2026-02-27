"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHandMetalProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rockVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -10, 10, -5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 0.5,
      ease: "easeInOut",
    },
  },
};

export function IconHandMetal({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconHandMetalProps) {
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
      <motion.g variants={rockVariants} style={{ originX: "12px", originY: "18px" }}>
        <path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
        <path d="M14 11V9a2 2 0 1 0-4 0v2" />
        <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
        <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
      </motion.g>
    </motion.svg>
  );
}
