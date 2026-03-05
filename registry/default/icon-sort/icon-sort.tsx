"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSortProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const upVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -2, 0],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const downVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, 2, 0],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export function IconSort({ size = 24, strokeWidth = 2, className, ...props }: IconSortProps) {
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
      <motion.path d="m8 6 3-3 3 3" variants={upVariants} />
      <motion.path d="M11 3v12" variants={upVariants} />
      <motion.path d="m16 18-3 3-3-3" variants={downVariants} />
      <motion.path d="M13 9v12" variants={downVariants} />
    </motion.svg>
  );
}
