"use client";

import { motion, useReducedMotion, type SVGMotionProps } from "framer-motion";

export interface IconBoxesProps extends SVGMotionProps<SVGSVGElement> {
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

export function IconBoxes({ size = 24, strokeWidth = 2, className, ...props }: IconBoxesProps) {
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
        d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
         />
      <motion.path 
        key="1"
        d="m7 16.5-4.74-2.85"
         />
      <motion.path 
        key="2"
        d="m7 16.5 5-3"
         />
      <motion.path 
        key="3"
        d="M7 16.5v5.17"
         />
      <motion.path 
        key="4"
        d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
         />
      <motion.path 
        key="5"
        d="m17 16.5-5-3"
         />
      <motion.path 
        key="6"
        d="m17 16.5 4.74-2.85"
         />
      <motion.path 
        key="7"
        d="M17 16.5v5.17"
         />
      <motion.path 
        key="8"
        d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
         />
      <motion.path 
        key="9"
        d="M12 8 7.26 5.15"
         />
      <motion.path 
        key="10"
        d="m12 8 4.74-2.85"
         />
      <motion.path 
        key="11"
        d="M12 13.5V8"
         />
    </motion.svg>
  );
}
