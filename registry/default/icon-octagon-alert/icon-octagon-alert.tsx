"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconOctagonAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}


const shakeVariants = {
  rest: { x: 0 },
  hover: {
    x: [0, -3, 3, -2, 2, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export function IconOctagonAlert({ size = 24, strokeWidth = 2, className, ...props }: IconOctagonAlertProps) {
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
      variants={shakeVariants}
      {...rest}
    >
      <motion.path 
        key="0"
        d="M12 16h.01"
         />
      <motion.path 
        key="1"
        d="M12 8v4"
         />
      <motion.path 
        key="2"
        d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"
         />
    </motion.svg>
  );
}
