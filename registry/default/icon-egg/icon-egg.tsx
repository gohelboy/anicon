"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconEggProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const eggVariants: Variants = {
  rest: { 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    rotate: [0, -5, 5, -3, 3, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconEgg({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconEggProps) {
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
      variants={prefersReducedMotion ? {} : eggVariants}
      {...rest}
    >
      <path d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" />
    </motion.svg>
  );
}
