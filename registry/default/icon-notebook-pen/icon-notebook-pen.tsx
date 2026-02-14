"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconNotebookPenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const lineVariants: Variants = {
  rest: { x: 0 },
  hover: { 
    x: 2,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  },
};

const penVariants: Variants = {
  rest: { 
    rotate: 0, 
    x: 0, 
    y: 0 
  },
  hover: { 
    rotate: [-5, 5, -5],
    x: [0, -1, 1, 0],
    y: [0, 1, -1, 0],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconNotebookPen({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconNotebookPenProps) {
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
      <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
      <motion.path variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.1 }} d="M2 6h4" />
      <motion.path variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.2 }} d="M2 10h4" />
      <motion.path variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.3 }} d="M2 14h4" />
      <motion.path variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.4 }} d="M2 18h4" />
      <motion.path 
        d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" 
        variants={prefersReducedMotion ? {} : penVariants}
        style={{ originX: "15px", originY: "10px" }}
      />
    </motion.svg>
  );
}
