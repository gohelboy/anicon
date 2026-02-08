"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBuilding2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const windowVariants: Variants = {
  rest: { 
    opacity: 1,
  },
  hover: (i: number) => ({
    opacity: [1, 0.2, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      delay: i * 0.15,
      ease: "easeInOut",
    },
  }),
};

export function IconBuilding2({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconBuilding2Props) {
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
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 18H2v4h4Z" />
      <path d="M18 18h4v4h-4Z" />
      <motion.path d="M10 22v-4h4v4" variants={prefersReducedMotion ? {} : windowVariants} custom={0} />
      <motion.path d="M8 6h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={1} />
      <motion.path d="M16 6h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={2} />
      <motion.path d="M8 10h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={3} />
      <motion.path d="M16 10h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={4} />
      <motion.path d="M8 14h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={5} />
      <motion.path d="M16 14h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={6} />
      <motion.path d="M12 6h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={7} />
      <motion.path d="M12 10h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={8} />
      <motion.path d="M12 14h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={9} />
    </motion.svg>
  );
}
