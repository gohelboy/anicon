"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTheaterProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const curtainVariants: Variants = {
  rest: { 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: (i: number) => ({
    x: i === 0 ? -2 : 2,
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  }),
};

export function IconTheater({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconTheaterProps) {
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
      <motion.path d="M2 10s3-3 3-8" variants={prefersReducedMotion ? {} : curtainVariants} custom={0} />
      <motion.path d="M22 10s-3-3-3-8" variants={prefersReducedMotion ? {} : curtainVariants} custom={1} />
      <motion.path d="M10 2c0 4.4-3.6 8-8 8" variants={prefersReducedMotion ? {} : curtainVariants} custom={0} />
      <motion.path d="M14 2c0 4.4 3.6 8 8 8" variants={prefersReducedMotion ? {} : curtainVariants} custom={1} />
      <motion.path d="M2 10s2 2 2 5" variants={prefersReducedMotion ? {} : curtainVariants} custom={0} />
      <motion.path d="M22 10s-2 2-2 5" variants={prefersReducedMotion ? {} : curtainVariants} custom={1} />
      <path d="M8 15h8" />
      <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
      <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
    </motion.svg>
  );
}
