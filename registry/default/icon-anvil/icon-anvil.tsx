"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconAnvilProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const topVariants: Variants = {
  rest: { 
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    y: [0, -2, 0],
    rotate: [0, -1, 1, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const baseVariants: Variants = {
  rest: { 
    scaleX: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    scaleX: [1, 1.05, 1],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

export function IconAnvil({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconAnvilProps) {
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
      <motion.g 
        variants={prefersReducedMotion ? {} : topVariants}
        style={{ originX: "12px", originY: "12px" }}
      >
        <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
        <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
        <path d="M9 12v5" />
        <path d="M15 12v5" />
      </motion.g>
      <motion.path 
        d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" 
        variants={prefersReducedMotion ? {} : baseVariants}
        style={{ originX: "12px", originY: "20px" }}
      />
    </motion.svg>
  );
}
