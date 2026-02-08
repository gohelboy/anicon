"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTransgenderProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const coreVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const armVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconTransgender({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTransgenderProps) {
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
      <motion.g variants={coreVariants} style={{ originX: "12px", originY: "12px" }}>
        <circle cx="12" cy="12" r="4" />
        <motion.g variants={armVariants}>
          <path d="M12 16v6" />
          <path d="M14 20h-4" />
        </motion.g>
        <motion.g variants={armVariants} transition={{ delay: 0.2 }}>
          <path d="M18 2h4v4" />
          <path d="m22 2-7.17 7.17" />
        </motion.g>
        <motion.g variants={armVariants} transition={{ delay: 0.4 }}>
          <path d="m2 2 7.17 7.17" />
          <path d="M2 5.355V2h3.357" />
          <path d="M8 5 5 8" />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
}
