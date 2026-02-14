"use client";

import { motion, useReducedMotion, type SVGMotionProps } from "framer-motion";

export interface IconCircleDotDashedProps extends SVGMotionProps<SVGSVGElement> {
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
} as any;

export function IconCircleDotDashed({ size = 24, strokeWidth = 2, className, ...props }: IconCircleDotDashedProps) {
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
        d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"
         />
      <motion.path 
        key="1"
        d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"
         />
      <motion.path 
        key="2"
        d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"
         />
      <motion.path 
        key="3"
        d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"
         />
      <motion.path 
        key="4"
        d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"
         />
      <motion.path 
        key="5"
        d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"
         />
      <motion.path 
        key="6"
        d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"
         />
      <motion.path 
        key="7"
        d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"
         />
      <motion.circle 
        key="8"
        cx="12" cy="12" r="1"
         />
    </motion.svg>
  );
}
