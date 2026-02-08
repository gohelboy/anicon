"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCastleProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const towerVariants: Variants = {
  rest: { 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    y: [0, -2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const gateVariants: Variants = {
  rest: { 
    scaleY: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    scaleY: [1, 0.7, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconCastle({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCastleProps) {
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
      <motion.path d="M10 5V3" variants={prefersReducedMotion ? {} : towerVariants} />
      <motion.path d="M14 5V3" variants={prefersReducedMotion ? {} : towerVariants} />
      <motion.path 
        d="M15 21v-3a3 3 0 0 0-6 0v3" 
        variants={prefersReducedMotion ? {} : gateVariants}
        style={{ originX: "12px", originY: "21px" }}
      />
      <motion.path d="M18 3v8" variants={prefersReducedMotion ? {} : towerVariants} />
      <path d="M18 5H6" />
      <path d="M22 11H2" />
      <path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" />
      <motion.path d="M6 3v8" variants={prefersReducedMotion ? {} : towerVariants} />
    </motion.svg>
  );
}
