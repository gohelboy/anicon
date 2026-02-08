"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBarcodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const laserVariants: Variants = {
  rest: { y: 2, opacity: 0 },
  hover: {
    y: [2, 14, 2],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const barVariants: Variants = {
  rest: { opacity: 1 },
  hover: (i: number) => ({
    opacity: [1, 0.7, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

export function IconBarcode({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBarcodeProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...restOptions } = props;
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
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...restOptions}
    >
      <motion.path d="M3 5v14" variants={barVariants} custom={0} />
      <motion.path d="M8 5v14" variants={barVariants} custom={1} />
      <motion.path d="M12 5v14" variants={barVariants} custom={2} />
      <motion.path d="M17 5v14" variants={barVariants} custom={3} />
      <motion.path d="M21 5v14" variants={barVariants} custom={4} />
      
      {/* Laser line effect */}
      <motion.line 
        x1="2" 
        y1="5" 
        x2="22" 
        y2="5" 
        stroke="red" 
        strokeWidth="1" 
        variants={laserVariants}
        style={{ filter: "drop-shadow(0 0 2px red)" }}
      />
    </motion.svg>
  );
}
