"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCloudRainWindProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rainVariants: Variants = {
  rest: { 
    x: 0,
    y: 0,
    opacity: 1,
  },
  hover: (i: number) => ({
    x: -2,
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

export function IconCloudRainWind({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCloudRainWindProps) {
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
        d="m9.2 22 3-7" 
        variants={prefersReducedMotion ? {} : rainVariants} 
        custom={0}
      />
      <motion.path 
        d="m9 13-3 7" 
        variants={prefersReducedMotion ? {} : rainVariants} 
        custom={1}
      />
      <motion.path 
        d="m17 13-3 7" 
        variants={prefersReducedMotion ? {} : rainVariants} 
        custom={2}
      />
    </motion.svg>
  );
}
