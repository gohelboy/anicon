"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCloudOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const slashVariants: Variants = {
  rest: { 
    pathLength: 1,
    opacity: 1,
  },
  hover: {
    pathLength: [1, 0.5, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconCloudOff({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCloudOffProps) {
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
      <motion.path d="m2 2 20 20" variants={prefersReducedMotion ? {} : slashVariants} />
      <path d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" />
      <path d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10c-.235 0-.463.029-.683.084" />
      <path d="M11.359 6.236A6 6 0 0 1 15 4a6 6 0 0 1 6 6" />
    </motion.svg>
  );
}
