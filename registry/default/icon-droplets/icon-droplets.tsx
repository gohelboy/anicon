"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconDropletsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const dropVariants: Variants = {
  rest: { 
    y: 0,
    opacity: 1,
  },
  hover: (i: number) => ({
    y: [0, 10, 0],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 1.5,
      delay: i * 0.3,
      repeat: Infinity,
      ease: "easeIn",
    },
  }),
};

export function IconDroplets({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconDropletsProps) {
  const prefersReducedMotion = useReducedMotion();
  const {
    onAnimationStart,
    onAnimationEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    ...rest
  } = props;

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
      className={`select-none ${className ?? ""}`.trim()}
      initial="rest"
      whileHover="hover"
      {...rest}
    >
      <motion.path 
        d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
        variants={prefersReducedMotion ? {} : dropVariants}
        custom={0}
      />
      <motion.path 
        d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
        variants={prefersReducedMotion ? {} : dropVariants}
        custom={1}
      />
    </motion.svg>
  );
}
