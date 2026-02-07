"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBotProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const botVariants: Variants = {
  rest: { rotate: 0, y: 0 },
  hover: {
    rotate: [0, -5, 5, 0],
    y: [0, -2, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const eyeVariants: Variants = {
  rest: { scaleY: 1 },
  hover: {
    scaleY: [1, 0.1, 1],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut",
    },
  },
};

export function IconBot({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBotProps) {
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
      variants={botVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible", originY: "20px" }}
      {...restOptions}
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      {/* Eyes */}
      <motion.path d="M15 13v2" variants={eyeVariants} style={{ originY: "14px" }} />
      <motion.path d="M9 13v2" variants={eyeVariants} style={{ originY: "14px" }} />
    </motion.svg>
  );
}
