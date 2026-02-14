"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconUnfoldVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}


const expandVVariants = {
  rest: { scaleY: 1 },
  hover: {
    scaleY: 1.2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

export function IconUnfoldVertical({ size = 24, strokeWidth = 2, className, ...props }: IconUnfoldVerticalProps) {
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
      variants={expandVVariants}
      {...rest}
    >
      <motion.path 
        key="0"
        d="M12 22v-6"
         />
      <motion.path 
        key="1"
        d="M12 8V2"
         />
      <motion.path 
        key="2"
        d="M4 12H2"
         />
      <motion.path 
        key="3"
        d="M10 12H8"
         />
      <motion.path 
        key="4"
        d="M16 12h-2"
         />
      <motion.path 
        key="5"
        d="M22 12h-2"
         />
      <motion.path 
        key="6"
        d="m15 19-3 3-3-3"
         />
      <motion.path 
        key="7"
        d="m15 5-3-3-3 3"
         />
    </motion.svg>
  );
}
