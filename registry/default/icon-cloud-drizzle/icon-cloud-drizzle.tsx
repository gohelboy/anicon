"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCloudDrizzleProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rainVariants: Variants = {
  rest: { 
    y: 0,
    opacity: 1,
  },
  hover: (i: number) => ({
    y: 5,
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeIn",
    },
  }),
};

export function IconCloudDrizzle({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCloudDrizzleProps) {
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <motion.path 
        d="M8 19v1" 
        variants={prefersReducedMotion ? {} : rainVariants} 
        custom={0}
      />
      <motion.path 
        d="M8 14v1" 
        variants={prefersReducedMotion ? {} : rainVariants} 
        custom={1}
      />
      <motion.path 
        d="M16 19v1" 
        variants={prefersReducedMotion ? {} : rainVariants} 
        custom={2}
      />
      <motion.path 
        d="M16 14v1" 
        variants={prefersReducedMotion ? {} : rainVariants} 
        custom={3}
      />
      <motion.path 
        d="M12 21v1" 
        variants={prefersReducedMotion ? {} : rainVariants} 
        custom={4}
      />
      <motion.path 
        d="M12 16v1" 
        variants={prefersReducedMotion ? {} : rainVariants} 
        custom={5}
      />
    </motion.svg>
  );
}
