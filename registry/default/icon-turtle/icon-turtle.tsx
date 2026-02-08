"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTurtleProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}


const headVariants: Variants = {
  rest: { 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    x: [0, 1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconTurtle({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconTurtleProps) {
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
      <motion.g>
        <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
        <path d="M4.82 7.9 8 10" />
        <path d="M15.18 7.9 12 10" />
        <motion.path 
          d="M16.93 10H20a2 2 0 0 1 0 4H2" 
          variants={prefersReducedMotion ? {} : headVariants}
        />
      </motion.g>
    </motion.svg>
  );
}
