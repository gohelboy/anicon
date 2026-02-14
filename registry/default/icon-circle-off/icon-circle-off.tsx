"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconCircleOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}


const drawVariants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: 1,
    transition: {
      pathLength: { duration: 0.6, ease: "easeInOut" },
      opacity: { duration: 0.01 }
    }
  }
};

export function IconCircleOff({ size = 24, strokeWidth = 2, className, ...props }: IconCircleOffProps) {
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
      
      {...rest}
    >
      <motion.path 
        key="0"
        d="m2 2 20 20"
        variants={drawVariants} custom={0} />
      <motion.path 
        key="1"
        d="M8.35 2.69A10 10 0 0 1 21.3 15.65"
        variants={drawVariants} custom={1} />
      <motion.path 
        key="2"
        d="M19.08 19.08A10 10 0 1 1 4.92 4.92"
        variants={drawVariants} custom={2} />
    </motion.svg>
  );
}
