"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLinkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const chainVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const linkAVariants: Variants = {
  rest: { x: 0, y: 0 },
  hover: {
    x: [0, 1, 0],
    y: [0, -1, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const linkBVariants: Variants = {
  rest: { x: 0, y: 0 },
  hover: {
    x: [0, -1, 0],
    y: [0, 1, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconLink({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLinkProps) {
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
      variants={chainVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible", originX: "12px", originY: "12px" }}
      {...rest}
    >
      <motion.path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" variants={linkAVariants} />
      <motion.path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" variants={linkBVariants} />
    </motion.svg>
  );
}
