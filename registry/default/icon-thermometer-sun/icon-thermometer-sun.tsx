"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconThermometerSunProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

export function IconThermometerSun({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconThermometerSunProps) {
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
      <motion.g  style={{ originX: "6px", originY: "11px" }}>
        <path d="M12 2v2" />
        <path d="M12 8a4 4 0 0 0-1.645 7.647" />
        <path d="M2 12h2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m6.34 17.66-1.41 1.41" />
      </motion.g>
      <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />

      {/* Liquid inside - Rise high for hot */}
      <motion.line
        x1="18" // Center of the thermometer tube
        y1="18" // Bottom of the liquid column (near bulb)
        x2="18"
        y2="10" // Default top of the liquid column
        strokeWidth={strokeWidth}
        stroke="currentColor" 
        strokeLinecap="round"
        initial={{ y2: 10 }}
        variants={{
            rest: { y2: 10 },
            hover: { 
                y2: 5, // Rise up (y decreases upwards)
                transition: { duration: 0.8, ease: "easeOut" }
            }
        }}
      />
      
      {/* Bulb base fill */}
      <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
    </motion.svg>
  );
}
