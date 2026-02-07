"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBeakerProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const liquidVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -2, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const bubbleVariants: Variants = {
  rest: { scale: 0, opacity: 0 },
  hover: (i: number) => ({
    scale: [0, 1, 0.5],
    opacity: [0, 1, 0],
    y: [0, -8],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.5,
      ease: "easeOut",
    },
  }),
};

export function IconBeaker({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBeakerProps) {
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
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <motion.path d="M6 14h12" variants={liquidVariants} />
      
      {/* Bubbles */}
      <motion.circle cx="9" cy="12" r="1" fill="currentColor" variants={bubbleVariants} custom={0} />
      <motion.circle cx="15" cy="11" r="1" fill="currentColor" variants={bubbleVariants} custom={1} />
    </motion.svg>
  );
}
