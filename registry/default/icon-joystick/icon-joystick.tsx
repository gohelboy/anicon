"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconJoystickProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const stickVariants: Variants = {
  rest: { rotate: 0, x: 0 },
  hover: {
    rotate: [0, 15, -15, 10, -10, 0],
    x: [0, 1, -1, 0.5, -0.5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const baseVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconJoystick({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconJoystickProps) {
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
      <motion.path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" variants={baseVariants} />
      <motion.path d="M6 15v-2" style={{ originX: "12px", originY: "15px" }} />
      <motion.g variants={stickVariants} style={{ originX: "12px", originY: "15px" }}>
        <path d="M12 15V9" />
        <circle cx="12" cy="6" r="3" />
      </motion.g>
    </motion.svg>
  );
}
