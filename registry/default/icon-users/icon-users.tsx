"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUsersProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const userVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: (i: number) => ({
    scale: [1, 1.1, 1],
    y: [0, -1, 0],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      delay: i * 0.3,
      ease: "easeInOut",
    },
  }),
};

export function IconUsers({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUsersProps) {
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
      <motion.path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" variants={userVariants} custom={0} style={{ originX: "9px", originY: "18px" }} />
      <motion.path d="M16 3.128a4 4 0 0 1 0 7.744" variants={userVariants} custom={1} style={{ originX: "18px", originY: "7px" }} />
      <motion.path d="M22 21v-2a4 4 0 0 0-3-3.87" variants={userVariants} custom={2} style={{ originX: "19px", originY: "18px" }} />
      <motion.circle cx="9" cy="7" r="4" variants={userVariants} custom={3} style={{ originX: "9px", originY: "7px" }} />
    </motion.svg>
  );
}
