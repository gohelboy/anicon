"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCloudyProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const cloudVariants: Variants = {
  rest: { 
    x: 0,
  },
  hover: {
    x: [-2, 2, -2],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconCloudy({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCloudyProps) {
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
      <motion.path 
        d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" 
        variants={prefersReducedMotion ? {} : cloudVariants}
      />
      <motion.path 
        d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" 
        animate={prefersReducedMotion ? {} : { x: [2, -2, 2] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
