"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconZapOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const slashVariants: Variants = {
  rest: { 
    pathLength: 1,
    opacity: 1,
  },
  hover: {
    pathLength: [1, 0, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconZapOff({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconZapOffProps) {
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
      <path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" />
      <path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" />
      <path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643" />
      <motion.path d="m2 2 20 20" variants={prefersReducedMotion ? {} : slashVariants} />
    </motion.svg>
  );
}
