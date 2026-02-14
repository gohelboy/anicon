"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconCloverProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}


const wiggleVariants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export function IconClover({ size = 24, strokeWidth = 2, className, ...props }: IconCloverProps) {
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
      variants={wiggleVariants}
      {...rest}
    >
      <motion.path 
        key="0"
        d="M16.17 7.83 2 22"
         />
      <motion.path 
        key="1"
        d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"
         />
      <motion.path 
        key="2"
        d="m7.83 7.83 8.34 8.34"
         />
    </motion.svg>
  );
}
