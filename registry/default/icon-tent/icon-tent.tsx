"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTentProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const fabricVariants: Variants = {
  rest: { scaleX: 1 },
  hover: {
    scaleX: [1, 1.02, 0.98, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const flagVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 3, -3, 0],
    transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconTent({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTentProps) {
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
      <motion.g variants={fabricVariants} style={{ originX: "12px", originY: "21px" }}>
        <motion.path d="M3.5 21 14 3" variants={flagVariants} style={{ originX: "14px", originY: "3px" }} />
        <path d="M20.5 21 10 3" />
        <path d="M15.5 21 12 15l-3.5 6" />
      </motion.g>
      <path d="M2 21h20" />
    </motion.svg>
  );
}
