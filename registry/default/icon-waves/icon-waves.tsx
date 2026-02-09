"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconWavesProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const waveVariants: Variants = {
  rest: { 
    x: 0,
  },
  hover: (i: number) => ({
    x: [-3, 3, -3],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: i * 0.4,
      ease: "easeInOut",
    },
  }),
};

export function IconWaves({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconWavesProps) {
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
        d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" 
        variants={prefersReducedMotion ? {} : waveVariants} 
        custom={0} 
      />
      <motion.path 
        d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" 
        variants={prefersReducedMotion ? {} : waveVariants} 
        custom={1} 
      />
      <motion.path 
        d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" 
        variants={prefersReducedMotion ? {} : waveVariants} 
        custom={2} 
      />
    </motion.svg>
  );
}
