"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconRadiusProps extends React.SVGProps<SVGSVGElement> {
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

export function IconRadius({ size = 24, strokeWidth = 2, className, ...props }: IconRadiusProps) {
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
        d="M20.34 17.52a10 10 0 1 0-2.82 2.82"
        variants={drawVariants} custom={0} />
      <motion.circle 
        key="1"
        cx="19" cy="19" r="2"
        variants={drawVariants} custom={1} />
      <motion.path 
        key="2"
        d="m13.41 13.41 4.18 4.18"
        variants={drawVariants} custom={2} />
      <motion.circle 
        key="3"
        cx="12" cy="12" r="2"
        variants={drawVariants} custom={3} />
    </motion.svg>
  );
}
