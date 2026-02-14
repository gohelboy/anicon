"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconBadgeHelpProps extends React.SVGProps<SVGSVGElement> {
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

export function IconBadgeHelp({ size = 24, strokeWidth = 2, className, ...props }: IconBadgeHelpProps) {
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
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
         />
      <motion.path 
        key="1"
        d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
         />
      <motion.line 
        key="2"
        x1="12" x2="12.01" y1="17" y2="17"
         />
    </motion.svg>
  );
}
