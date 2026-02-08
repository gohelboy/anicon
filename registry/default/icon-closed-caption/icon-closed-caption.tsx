"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconClosedCaptionProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const textVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const boxVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconClosedCaption({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconClosedCaptionProps) {
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
      <motion.rect 
        x="2" y="5" width="20" height="14" rx="2" 
        variants={boxVariants}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.g variants={textVariants}>
        <path d="M10 9.17a3 3 0 1 0 0 5.66" />
        <path d="M17 9.17a3 3 0 1 0 0 5.66" />
      </motion.g>
    </motion.svg>
  );
}
