"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconTangentProps extends React.SVGProps<SVGSVGElement> {
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

export function IconTangent({ size = 24, strokeWidth = 2, className, ...props }: IconTangentProps) {
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
      <motion.circle 
        key="0"
        cx="17" cy="4" r="2"
        variants={drawVariants} custom={0} />
      <motion.path 
        key="1"
        d="M15.59 5.41 5.41 15.59"
        variants={drawVariants} custom={1} />
      <motion.circle 
        key="2"
        cx="4" cy="17" r="2"
        variants={drawVariants} custom={2} />
      <motion.path 
        key="3"
        d="M12 22s-4-9-1.5-11.5S22 12 22 12"
        variants={drawVariants} custom={3} />
    </motion.svg>
  );
}
