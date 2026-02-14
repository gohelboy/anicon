"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconListProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const dotVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: { 
    scale: [1, 1.5, 1],
    transition: { duration: 0.5, repeat: Infinity }
  },
};

const lineVariants: Variants = {
  rest: { x: 0 },
  hover: { 
    x: [0, 2, 0],
    transition: { duration: 0.4, ease: "easeInOut" }
  },
};

export function IconList({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconListProps) {
  const prefersReducedMotion = useReducedMotion();
  const {
    onAnimationStart,
    onAnimationEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    ...rest
  } = props;

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
      className={`select-none ${className ?? ""}`.trim()}
      initial="rest"
      whileHover="hover"
      {...rest}
    >
      <motion.path d="M3 5h.01" variants={prefersReducedMotion ? {} : dotVariants} transition={{ delay: 0.1 }} />
      <motion.path d="M3 12h.01" variants={prefersReducedMotion ? {} : dotVariants} transition={{ delay: 0.2 }} />
      <motion.path d="M3 19h.01" variants={prefersReducedMotion ? {} : dotVariants} transition={{ delay: 0.3 }} />
      <motion.path d="M8 5h13" variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.1 }} />
      <motion.path d="M8 12h13" variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.2 }} />
      <motion.path d="M8 19h13" variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.3 }} />
    </motion.svg>
  );
}
