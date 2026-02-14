"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconDiameterProps extends React.SVGProps<SVGSVGElement> {
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

export function IconDiameter({ size = 24, strokeWidth = 2, className, ...props }: IconDiameterProps) {
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
        cx="19" cy="19" r="2"
        variants={drawVariants} custom={0} />
      <motion.circle 
        key="1"
        cx="5" cy="5" r="2"
        variants={drawVariants} custom={1} />
      <motion.path 
        key="2"
        d="M6.48 3.66a10 10 0 0 1 13.86 13.86"
        variants={drawVariants} custom={2} />
      <motion.path 
        key="3"
        d="m6.41 6.41 11.18 11.18"
        variants={drawVariants} custom={3} />
      <motion.path 
        key="4"
        d="M3.66 6.48a10 10 0 0 0 13.86 13.86"
        variants={drawVariants} custom={4} />
    </motion.svg>
  );
}
