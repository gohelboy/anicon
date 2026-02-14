"use client";

import { motion, useReducedMotion, type SVGMotionProps } from "framer-motion";

export interface IconBoxProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}


const floatVariants = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
} as any;

export function IconBox({ size = 24, strokeWidth = 2, className, ...props }: IconBoxProps) {
  const {
    onAnimationStart,
    ...rest
  } = props;
  const prefersReducedMotion = useReducedMotion();

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
      initial={prefersReducedMotion ? false : "rest"}
      animate={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      variants={floatVariants}
      {...rest}
    >
      <motion.path 
        key="0"
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
         />
      <motion.path 
        key="1"
        d="m3.3 7 8.7 5 8.7-5"
         />
      <motion.path 
        key="2"
        d="M12 22V12"
         />
    </motion.svg>
  );
}
