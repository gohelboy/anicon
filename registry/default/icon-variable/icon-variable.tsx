"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconVariableProps extends React.SVGProps<SVGSVGElement> {
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

export function IconVariable({ size = 24, strokeWidth = 2, className, ...props }: IconVariableProps) {
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
        d="M8 21s-4-3-4-9 4-9 4-9"
        variants={drawVariants} custom={0} />
      <motion.path 
        key="1"
        d="M16 3s4 3 4 9-4 9-4 9"
        variants={drawVariants} custom={1} />
      <motion.line 
        key="2"
        x1="15" x2="9" y1="9" y2="15"
        variants={drawVariants} custom={2} />
      <motion.line 
        key="3"
        x1="9" x2="15" y1="9" y2="15"
        variants={drawVariants} custom={3} />
    </motion.svg>
  );
}
