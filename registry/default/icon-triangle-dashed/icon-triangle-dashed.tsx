"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconTriangleDashedProps extends React.SVGProps<SVGSVGElement> {
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

export function IconTriangleDashed({ size = 24, strokeWidth = 2, className, ...props }: IconTriangleDashedProps) {
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
        d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
         />
    </motion.svg>
  );
}
