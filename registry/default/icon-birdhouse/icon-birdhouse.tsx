"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBirdhouseProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const houseVariants: Variants = {
  rest: { 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    y: [0, -1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const holeVariants: Variants = {
  rest: { 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconBirdhouse({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconBirdhouseProps) {
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
      <path d="M12 18v4" />
      <motion.g variants={prefersReducedMotion ? {} : houseVariants}>
        <path d="m17 18 1.956-11.468" />
        <path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" />
        <path d="M4 18h16" />
        <path d="M7 18 5.044 6.532" />
        <motion.circle 
          cx="12" 
          cy="10" 
          r="2" 
          variants={prefersReducedMotion ? {} : holeVariants}
        />
      </motion.g>
    </motion.svg>
  );
}
