"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarHeartProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pinVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: [0, -3, 0],
    transition: { 
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 1
    }
  },
};

const heartVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: [1, 1.2, 1],
    transition: { 
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

export function IconCalendarHeart({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarHeartProps) {
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
      <path d="M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125" />
      <motion.path 
        d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" 
        variants={prefersReducedMotion ? {} : heartVariants}
        style={{ originX: "18px", originY: "18px" }}
      />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <path d="M3 10h18" />
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
    </motion.svg>
  );
}
