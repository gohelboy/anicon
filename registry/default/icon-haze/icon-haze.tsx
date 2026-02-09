"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHazeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const hazeVariants: Variants = {
  rest: { 
    x: 0,
    opacity: 1,
  },
  hover: (i: number) => ({
    x: [0, 2, -2, 0],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 3,
      delay: i * 0.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

export function IconHaze({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconHazeProps) {
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
      <motion.path d="m5.2 6.2 1.4 1.4" custom={0} />
      <motion.path d="M2 13h2" custom={1} />
      <motion.path d="M20 13h2" custom={2} />
      <motion.path d="m17.4 7.6 1.4-1.4"  custom={3} />
      <motion.path d="M22 17H2" variants={prefersReducedMotion ? {} : hazeVariants} custom={4} />
      <motion.path d="M22 21H2" variants={prefersReducedMotion ? {} : hazeVariants} custom={5} />
      <motion.path d="M16 13a4 4 0 0 0-8 0" custom={6} />
      <motion.path d="M12 5V2.5"  custom={7} />
    </motion.svg>
  );
}
