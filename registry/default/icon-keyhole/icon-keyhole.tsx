"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconKeyholeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const lockVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -1.5, 0],
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const holeVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.2, 1],
    transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconKeyhole({ size = 24, strokeWidth = 2, className, ...props }: IconKeyholeProps) {
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
      <motion.g variants={lockVariants}>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V8a4 4 0 0 1 8 0v2" />
      </motion.g>
      <motion.path d="M12 14a1.5 1.5 0 1 0 0 3v2" variants={holeVariants} />
    </motion.svg>
  );
}
