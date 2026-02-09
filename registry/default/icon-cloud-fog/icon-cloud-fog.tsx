"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCloudFogProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const fogVariants: Variants = {
  rest: { 
    x: 0,
  },
  hover: (i: number) => ({
    x: [0, 4, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: i * 0.5,
      ease: "easeInOut",
    },
  }),
};

export function IconCloudFog({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCloudFogProps) {
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
        d="M16 17H7" 
        variants={prefersReducedMotion ? {} : fogVariants} 
        custom={0}
      />
      <motion.path 
        d="M17 21H9" 
        variants={prefersReducedMotion ? {} : fogVariants} 
        custom={1}
      />
    </motion.svg>
  );
}
