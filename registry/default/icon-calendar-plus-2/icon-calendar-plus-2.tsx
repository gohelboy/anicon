"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarPlus2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pinVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: [0, -2, 0],
    transition: { 
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 1
    }
  },
};

const plusVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: { 
    rotate: 90,
    scale: 1.1,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
};

export function IconCalendarPlus2({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarPlus2Props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      
      {/* Plus Group */}
      <motion.g
        variants={prefersReducedMotion ? {} : plusVariants}
        style={{ originX: "12px", originY: "16px" }}
      >
        <path d="M10 16h4" />
        <path d="M12 14v4" />
      </motion.g>
    </motion.svg>
  );
}
