"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarFoldProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pinVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: [0, -2, 0],
    transition: { 
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 1
    }
  },
};

const foldVariants: Variants = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: { 
    scale: [1, 1.1, 1],
    x: [0, -1, 0],
    y: [0, 1, 0],
    transition: { 
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconCalendarFold({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarFoldProps) {
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
      <path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
      <path d="M3 10h18" />
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path 
        d="M15 22v-5a1 1 0 0 1 1-1h5" 
        variants={prefersReducedMotion ? {} : foldVariants}
        style={{ originX: "21px", originY: "22px" }}
      />
    </motion.svg>
  );
}
