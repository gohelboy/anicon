"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconCircleDashedProps extends React.SVGProps<SVGSVGElement> {
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

export function IconCircleDashed({ size = 24, strokeWidth = 2, className, ...props }: IconCircleDashedProps) {
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
        d="M10.1 2.182a10 10 0 0 1 3.8 0"
         />
      <motion.path 
        key="1"
        d="M13.9 21.818a10 10 0 0 1-3.8 0"
         />
      <motion.path 
        key="2"
        d="M17.609 3.721a10 10 0 0 1 2.69 2.7"
         />
      <motion.path 
        key="3"
        d="M2.182 13.9a10 10 0 0 1 0-3.8"
         />
      <motion.path 
        key="4"
        d="M20.279 17.609a10 10 0 0 1-2.7 2.69"
         />
      <motion.path 
        key="5"
        d="M21.818 10.1a10 10 0 0 1 0 3.8"
         />
      <motion.path 
        key="6"
        d="M3.721 6.391a10 10 0 0 1 2.7-2.69"
         />
      <motion.path 
        key="7"
        d="M6.391 20.279a10 10 0 0 1-2.69-2.7"
         />
    </motion.svg>
  );
}
