"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFenceProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const barVariants: Variants = {
  rest: { 
    pathLength: 1,
    opacity: 1,
  },
  hover: {
    pathLength: [1, 0.8, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconFence({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconFenceProps) {
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
      <path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
      <motion.path d="M6 8h4" variants={prefersReducedMotion ? {} : barVariants} />
      <motion.path d="M6 18h4" variants={prefersReducedMotion ? {} : barVariants} />
      <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
      <motion.path d="M14 8h4" variants={prefersReducedMotion ? {} : barVariants} />
      <motion.path d="M14 18h4" variants={prefersReducedMotion ? {} : barVariants} />
      <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
    </motion.svg>
  );
}
