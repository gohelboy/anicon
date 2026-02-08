"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSwordsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const leftSwordVariants: Variants = {
  rest: { x: 0, y: 0, rotate: 0 },
  hover: {
    x: [0, -1, 1, 0],
    y: [0, -1, 1, 0],
    rotate: [0, -2, 2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const rightSwordVariants: Variants = {
  rest: { x: 0, y: 0, rotate: 0 },
  hover: {
    x: [0, 1, -1, 0],
    y: [0, -1, 1, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSwords({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSwordsProps) {
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
      <motion.g variants={leftSwordVariants} style={{ originX: "6px", originY: "6px" }}>
        <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
        <line x1="13" x2="19" y1="19" y2="13" />
        <line x1="16" x2="20" y1="16" y2="20" />
        <line x1="19" x2="21" y1="21" y2="19" />
      </motion.g>
      <motion.g variants={rightSwordVariants} style={{ originX: "18px", originY: "3px" }}>
        <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
        <line x1="5" x2="9" y1="14" y2="18" />
        <line x1="7" x2="4" y1="17" y2="20" />
        <line x1="3" x2="5" y1="19" y2="21" />
      </motion.g>
    </motion.svg>
  );
}
