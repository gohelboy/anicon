"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconConeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}


const floatVariants = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

export function IconCone({ size = 24, strokeWidth = 2, className, ...props }: IconConeProps) {
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
      variants={floatVariants}
      {...rest}
    >
      <motion.path 
        key="0"
        d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"
         />
      <motion.ellipse 
        key="1"
        cx="12" cy="19" rx="9" ry="3"
         />
    </motion.svg>
  );
}
