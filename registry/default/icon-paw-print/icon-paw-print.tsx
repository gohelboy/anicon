"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPawPrintProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const padVariants: Variants = {
  rest: { 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: (i: number) => ({
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

export function IconPawPrint({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconPawPrintProps) {
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
      <motion.circle cx="11" cy="4" r="2" variants={prefersReducedMotion ? {} : padVariants} custom={0} style={{ originX: "11px", originY: "4px" }} />
      <motion.circle cx="18" cy="8" r="2" variants={prefersReducedMotion ? {} : padVariants} custom={1} style={{ originX: "18px", originY: "8px" }} />
      <motion.circle cx="20" cy="16" r="2" variants={prefersReducedMotion ? {} : padVariants} custom={2} style={{ originX: "20px", originY: "16px" }} />
      <motion.path 
        d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" 
        custom={3}
        style={{ originX: "9px", originY: "15px" }}
      />
    </motion.svg>
  );
}
