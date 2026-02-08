"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLibraryProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bookVariants: Variants = {
  rest: { 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: (i: number) => ({
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconLibrary({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconLibraryProps) {
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
        d="m16 6 4 14" 
        variants={prefersReducedMotion ? {} : bookVariants} 
        custom={0}
        style={{ originX: "20px", originY: "20px" }}
      />
      <motion.path 
        d="M12 6v14" 
        variants={prefersReducedMotion ? {} : bookVariants} 
        custom={1}
        style={{ originY: "20px" }}
      />
      <motion.path 
        d="M8 8v12" 
        variants={prefersReducedMotion ? {} : bookVariants} 
        custom={2}
        style={{ originY: "20px" }}
      />
      <motion.path 
        d="M4 4v16" 
        variants={prefersReducedMotion ? {} : bookVariants} 
        custom={3}
        style={{ originY: "20px" }}
      />
    </motion.svg>
  );
}
