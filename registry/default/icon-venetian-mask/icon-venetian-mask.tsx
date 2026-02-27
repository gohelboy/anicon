"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconVenetianMaskProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const revealVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: [1, 1.05, 1],
    y: [0, -1, 0],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const eyeVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.3, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconVenetianMask({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconVenetianMaskProps) {
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
      <motion.g variants={revealVariants} style={{ originX: "12px", originY: "10px" }}>
        <path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" />
        <motion.path d="M18 11c-1.5 0-2.5.5-3 2" variants={eyeVariants} />
        <motion.path d="M6 11c1.5 0 2.5.5 3 2" variants={eyeVariants} />
      </motion.g>
    </motion.svg>
  );
}
