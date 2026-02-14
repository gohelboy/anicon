"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconUnfoldHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}


const expandHVariants = {
  rest: { scaleX: 1 },
  hover: {
    scaleX: 1.2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

export function IconUnfoldHorizontal({ size = 24, strokeWidth = 2, className, ...props }: IconUnfoldHorizontalProps) {
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
      variants={expandHVariants}
      {...rest}
    >
      <motion.path 
        key="0"
        d="M16 12h6"
         />
      <motion.path 
        key="1"
        d="M8 12H2"
         />
      <motion.path 
        key="2"
        d="M12 2v2"
         />
      <motion.path 
        key="3"
        d="M12 8v2"
         />
      <motion.path 
        key="4"
        d="M12 14v2"
         />
      <motion.path 
        key="5"
        d="M12 20v2"
         />
      <motion.path 
        key="6"
        d="m19 15 3-3-3-3"
         />
      <motion.path 
        key="7"
        d="m5 9-3 3 3 3"
         />
    </motion.svg>
  );
}
