"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBugProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const legVariants: Variants = {
  rest: { 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: (i: number) => ({
    rotate: [0, i % 2 === 0 ? 5 : -5, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const headVariants: Variants = {
  rest: { 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    y: [0, -0.5, 0.5, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconBug({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconBugProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : headVariants}>
        <path d="M12 20v-9" />
        <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" />
        <path d="M14.12 3.88 16 2" />
        <motion.path 
          d="M21 21a4 4 0 0 0-3.81-4" 
          variants={prefersReducedMotion ? {} : legVariants} 
          custom={0} 
          style={{ originX: "17.19px", originY: "17px" }} 
        />
        <motion.path 
          d="M21 5a4 4 0 0 1-3.55 3.97" 
          variants={prefersReducedMotion ? {} : legVariants} 
          custom={1} 
          style={{ originX: "17.45px", originY: "8.97px" }} 
        />
        <motion.path 
          d="M22 13h-4" 
          variants={prefersReducedMotion ? {} : legVariants} 
          custom={2} 
          style={{ originX: "18px", originY: "13px" }} 
        />
        <motion.path 
          d="M3 21a4 4 0 0 1 3.81-4" 
          variants={prefersReducedMotion ? {} : legVariants} 
          custom={3} 
          style={{ originX: "6.81px", originY: "17px" }} 
        />
        <motion.path 
          d="M3 5a4 4 0 0 0 3.55 3.97" 
          variants={prefersReducedMotion ? {} : legVariants} 
          custom={4} 
          style={{ originX: "6.55px", originY: "8.97px" }} 
        />
        <motion.path 
          d="M6 13H2" 
          variants={prefersReducedMotion ? {} : legVariants} 
          custom={5} 
          style={{ originX: "6px", originY: "13px" }} 
        />
        <path d="m8 2 1.88 1.88" />
        <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
      </motion.g>
    </motion.svg>
  );
}
