"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconNotebookTabsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const ringVariants: Variants = {
  rest: { x: 0 },
  hover: { 
    x: [0, 2, 0],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

const tabVariants: Variants = {
  rest: { opacity: 1, x: 0 },
  hover: { 
    opacity: [1, 0.5, 1],
    x: [0, 1, 0],
    transition: { duration: 0.6, repeat: Infinity }
  },
};

export function IconNotebookTabs({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconNotebookTabsProps) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M15 2v20" />
      
      {/* Left Lines */}
      <motion.path variants={prefersReducedMotion ? {} : ringVariants} transition={{ delay: 0.1 }} d="M2 6h4" />
      <motion.path variants={prefersReducedMotion ? {} : ringVariants} transition={{ delay: 0.2 }} d="M2 10h4" />
      <motion.path variants={prefersReducedMotion ? {} : ringVariants} transition={{ delay: 0.3 }} d="M2 14h4" />
      <motion.path variants={prefersReducedMotion ? {} : ringVariants} transition={{ delay: 0.4 }} d="M2 18h4" />
      
      {/* Side Tabs */}
      <motion.path variants={prefersReducedMotion ? {} : tabVariants} transition={{ delay: 0.1 }} d="M15 7h5" />
      <motion.path variants={prefersReducedMotion ? {} : tabVariants} transition={{ delay: 0.3 }} d="M15 12h5" />
      <motion.path variants={prefersReducedMotion ? {} : tabVariants} transition={{ delay: 0.5 }} d="M15 17h5" />
    </motion.svg>
  );
}
