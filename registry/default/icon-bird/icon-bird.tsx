"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBirdProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const eyeVariants: Variants = {
  rest: { 
    scaleY: 1,
    transition: {
      duration: 0.1
    }
  },
  hover: {
    scaleY: [1, 0.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      times: [0, 0.1, 0.2],
      repeatDelay: 2
    },
  },
};

export function IconBird({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconBirdProps) {
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
      <g>
        {/* Eye */}
        <motion.circle 
          cx="16" 
          cy="7" 
          r=".5" 
          fill="currentColor" 
          variants={prefersReducedMotion ? {} : eyeVariants}
          style={{ originX: "16px", originY: "7px" }}
        />
        
        {/* Body */}
        <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
        
        {/* Leg 1 */}
        <path d="M10 18v3" />
        
        {/* Leg 2 */}
        <path d="M14 17.75V21" />

        {/* Beak */}
        <path d="m20 7 2 .5-2 .5" />
        
        {/* Wing */}
        <path d="M7 18a6 6 0 0 0 3.84-10.61" />
      </g>
    </motion.svg>
  );
}
