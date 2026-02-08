"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHotelProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const windowVariants: Variants = {
  rest: { 
    opacity: 1,
  },
  hover: (i: number) => ({
    opacity: [1, 0.3, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconHotel({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconHotelProps) {
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
      <path d="M10 22v-6.57" />
      <motion.path d="M12 11h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={0} />
      <motion.path d="M12 7h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={1} />
      <path d="M14 15.43V22" />
      <path d="M15 16a5 5 0 0 0-6 0" />
      <motion.path d="M16 11h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={2} />
      <motion.path d="M16 7h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={3} />
      <motion.path d="M8 11h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={4} />
      <motion.path d="M8 7h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={5} />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </motion.svg>
  );
}
