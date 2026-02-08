"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTargetProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const ringVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: (i: number) => ({
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconTarget({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTargetProps) {
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
      <motion.circle cx="12" cy="12" r="10" variants={ringVariants} custom={2} style={{ originX: "12px", originY: "12px" }} />
      <motion.circle cx="12" cy="12" r="6" variants={ringVariants} custom={1} style={{ originX: "12px", originY: "12px" }} />
      <motion.circle cx="12" cy="12" r="2" variants={ringVariants} custom={0} style={{ originX: "12px", originY: "12px" }} />
    </motion.svg>
  );
}
