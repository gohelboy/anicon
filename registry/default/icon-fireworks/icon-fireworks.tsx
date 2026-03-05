"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFireworksProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const burstVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: [0.8, 1.25, 1],
    opacity: [0.5, 1, 0.8],
    transition: { duration: 0.8, repeat: Infinity, ease: "easeOut" },
  },
};

const sparkVariants: Variants = {
  rest: { y: 0, opacity: 1 },
  hover: {
    y: [0, -2, 0],
    opacity: [1, 0.4, 1],
    transition: { duration: 0.7, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconFireworks({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconFireworksProps) {
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
      <motion.g variants={burstVariants} style={{ originX: "8px", originY: "8px" }}>
        <path d="M8 3v3" />
        <path d="M8 10v3" />
        <path d="M3 8h3" />
        <path d="M10 8h3" />
        <path d="m4.5 4.5 2.1 2.1" />
        <path d="m9.4 9.4 2.1 2.1" />
        <path d="m11.5 4.5-2.1 2.1" />
        <path d="m6.6 9.4-2.1 2.1" />
      </motion.g>
      <motion.g variants={sparkVariants}>
        <path d="M16 13v2" />
        <path d="M16 18v2" />
        <path d="M14 16h-2" />
        <path d="M18 16h2" />
      </motion.g>
      <path d="m6 20 2-3" />
    </motion.svg>
  );
}
