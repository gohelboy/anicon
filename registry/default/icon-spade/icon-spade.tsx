"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconSpadeProps extends React.SVGProps<SVGSVGElement> {
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

export function IconSpade({ size = 24, strokeWidth = 2, className, ...props }: IconSpadeProps) {
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
        d="M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"
        variants={drawVariants} custom={0} />
      <motion.path 
        key="1"
        d="M12 18v4"
        variants={drawVariants} custom={1} />
    </motion.svg>
  );
}
