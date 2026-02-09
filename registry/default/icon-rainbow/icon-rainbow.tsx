"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconRainbowProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const arcVariants: Variants = {
  rest: { 
    pathLength: 1,
    opacity: 1,
  },
  hover: (i: number) => ({
    pathLength: [1, 0, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      delay: i * 0.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

export function IconRainbow({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconRainbowProps) {
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
      <motion.path d="M22 17a10 10 0 0 0-20 0" variants={prefersReducedMotion ? {} : arcVariants} custom={2} />
      <motion.path d="M6 17a6 6 0 0 1 12 0" variants={prefersReducedMotion ? {} : arcVariants} custom={1} />
      <motion.path d="M10 17a2 2 0 0 1 4 0" variants={prefersReducedMotion ? {} : arcVariants} custom={0} />
    </motion.svg>
  );
}
