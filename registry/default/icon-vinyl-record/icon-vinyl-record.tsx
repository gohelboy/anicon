"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconVinylRecordProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const diskVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: { duration: 1.6, repeat: Infinity, ease: "linear" },
  },
};

const needleVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 10, 7],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export function IconVinylRecord({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconVinylRecordProps) {
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
      <motion.g variants={diskVariants} style={{ originX: "10px", originY: "14px" }}>
        <circle cx="10" cy="14" r="7" />
        <circle cx="10" cy="14" r="3" />
        <circle cx="10" cy="14" r="1" />
      </motion.g>
      <motion.g variants={needleVariants} style={{ originX: "18px", originY: "6px" }}>
        <path d="M18 4v7" />
        <path d="m18 11-3 3" />
      </motion.g>
    </motion.svg>
  );
}
