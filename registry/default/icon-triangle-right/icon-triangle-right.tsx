"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconTriangleRightProps extends React.SVGProps<SVGSVGElement> {
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

export function IconTriangleRight({ size = 24, strokeWidth = 2, className, ...props }: IconTriangleRightProps) {
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
        d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"
        variants={drawVariants} custom={0} />
    </motion.svg>
  );
}
