"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBrickWallProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const brickVariants: Variants = {
  rest: { 
    opacity: 1,
    scale: 1,
  },
  hover: (i: number) => ({
    opacity: [1, 0.5, 1],
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

export function IconBrickWall({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconBrickWallProps) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <motion.path d="M12 9v6" variants={prefersReducedMotion ? {} : brickVariants} custom={0} />
      <motion.path d="M16 15v6" variants={prefersReducedMotion ? {} : brickVariants} custom={1} />
      <motion.path d="M16 3v6" variants={prefersReducedMotion ? {} : brickVariants} custom={2} />
      <motion.path d="M3 15h18" variants={prefersReducedMotion ? {} : brickVariants} custom={3} />
      <motion.path d="M3 9h18" variants={prefersReducedMotion ? {} : brickVariants} custom={4} />
      <motion.path d="M8 15v6" variants={prefersReducedMotion ? {} : brickVariants} custom={5} />
      <motion.path d="M8 3v6" variants={prefersReducedMotion ? {} : brickVariants} custom={6} />
    </motion.svg>
  );
}
