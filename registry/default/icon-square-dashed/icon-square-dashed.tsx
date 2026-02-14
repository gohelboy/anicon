"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconSquareDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}


const spinVariants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export function IconSquareDashed({ size = 24, strokeWidth = 2, className, ...props }: IconSquareDashedProps) {
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
      variants={spinVariants}
      {...rest}
    >
      <motion.path 
        key="0"
        d="M5 3a2 2 0 0 0-2 2"
         />
      <motion.path 
        key="1"
        d="M19 3a2 2 0 0 1 2 2"
         />
      <motion.path 
        key="2"
        d="M21 19a2 2 0 0 1-2 2"
         />
      <motion.path 
        key="3"
        d="M5 21a2 2 0 0 1-2-2"
         />
      <motion.path 
        key="4"
        d="M9 3h1"
         />
      <motion.path 
        key="5"
        d="M9 21h1"
         />
      <motion.path 
        key="6"
        d="M14 3h1"
         />
      <motion.path 
        key="7"
        d="M14 21h1"
         />
      <motion.path 
        key="8"
        d="M3 9v1"
         />
      <motion.path 
        key="9"
        d="M21 9v1"
         />
      <motion.path 
        key="10"
        d="M3 14v1"
         />
      <motion.path 
        key="11"
        d="M21 14v1"
         />
    </motion.svg>
  );
}
