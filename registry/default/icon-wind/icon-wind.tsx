"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconWindProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const windVariants: Variants = {
  rest: { 
    x: 0,
    opacity: 1,
  },
  hover: (i: number) => ({
    x: [-2, 4, -2],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconWind({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconWindProps) {
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
        d="M12.8 19.6A2 2 0 1 0 14 16H2" 
        variants={prefersReducedMotion ? {} : windVariants} 
        custom={0} 
      />
      <motion.path 
        d="M17.5 8a2.5 2.5 0 1 1 2 4H2" 
        variants={prefersReducedMotion ? {} : windVariants} 
        custom={1} 
      />
      <motion.path 
        d="M9.8 4.4A2 2 0 1 1 11 8H2" 
        variants={prefersReducedMotion ? {} : windVariants} 
        custom={2} 
      />
    </motion.svg>
  );
}
