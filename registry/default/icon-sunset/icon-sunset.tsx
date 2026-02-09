"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSunsetProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const sunVariants: Variants = {
  rest: { 
    y: 0,
    opacity: 1,
  },
  hover: {
    y: 3,
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const arrowVariants: Variants = {
  rest: { 
    y: 0,
  },
  hover: {
    y: [0, 2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSunset({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconSunsetProps) {
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
      <path d="M12 10V2" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <motion.path d="m16 6-4 4-4-4" variants={prefersReducedMotion ? {} : arrowVariants} />
      <motion.path d="M16 18a4 4 0 0 0-8 0" variants={prefersReducedMotion ? {} : sunVariants} />
    </motion.svg>
  );
}
