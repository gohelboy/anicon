"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconContactProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const personVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -0.8, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconContact({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconContactProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...restOptions } = props;
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
      {...restOptions}
    >
      <motion.g>
        <path d="M16 2v2" />
        <path d="M8 2v2" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
      </motion.g>
      <motion.g variants={personVariants} style={{ originX: "12px", originY: "15px" }}>
        <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        <circle cx="12" cy="11" r="3" />
      </motion.g>
    </motion.svg>
  );
}
