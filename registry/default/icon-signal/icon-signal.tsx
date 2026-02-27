"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSignalProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const barVariants = (delay: number): Variants => ({
  rest: { scaleY: 1, opacity: 1 },
  hover: {
    scaleY: [1, 0.4, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 0.6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export function IconSignal({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSignalProps) {
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
      <path d="M2 20h.01" />
      <motion.path d="M7 20v-4" variants={barVariants(0)} style={{ originY: "20px" }} />
      <motion.path d="M12 20v-8" variants={barVariants(0.1)} style={{ originY: "20px" }} />
      <motion.path d="M17 20V8" variants={barVariants(0.2)} style={{ originY: "20px" }} />
      <motion.path d="M22 4v16" variants={barVariants(0.3)} style={{ originY: "20px" }} />
    </motion.svg>
  );
}
