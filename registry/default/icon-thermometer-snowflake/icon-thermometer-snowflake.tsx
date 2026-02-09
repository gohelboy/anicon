"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconThermometerSnowflakeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}


export function IconThermometerSnowflake({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconThermometerSnowflakeProps) {
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
      <motion.g style={{ originX: "7px", originY: "12px" }}>
         <path d="m10 20-1.25-2.5L6 18" />
         <path d="M10 4 8.75 6.5 6 6" />
         <path d="M10.585 15H10" />
         <path d="M2 12h6.5L10 9" />
         <path d="m4 10 1.5 2L4 14" />
         <path d="m7 21 3-6-1.5-3" />
         <path d="m7 3 3 6h2" />
      </motion.g>
      <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
      
      {/* Liquid inside - Drop low for cold */}
      <motion.line
        x1="18"
        y1="18"
        x2="18"
        y2="10" // Default height
        strokeWidth={strokeWidth}
        stroke="currentColor" 
        strokeLinecap="round"
        initial={{ y2: 10 }} // Start slightly filled
        variants={{
            rest: { y2: 10 },
            hover: { 
                y2: 13, // Drop down (y increases downwards)
                transition: { duration: 0.8, ease: "easeOut" }
            }
        }}
      />
      
      {/* Bulb base fill */}
      <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
    </motion.svg>
  );
}
