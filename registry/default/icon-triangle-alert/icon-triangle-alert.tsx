"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconTriangleAlertProps extends React.SVGProps<SVGSVGElement> {
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

export function IconTriangleAlert({ size = 24, strokeWidth = 2, className, ...props }: IconTriangleAlertProps) {
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
        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
         />
      <motion.path 
        key="1"
        d="M12 9v4"
         />
      <motion.path 
        key="2"
        d="M12 17h.01"
         />
    </motion.svg>
  );
}
