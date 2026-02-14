"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTimerProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const buttonVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: 1,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
};

const handVariants: Variants = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: { 
      duration: 2,
      ease: "linear",
      repeat: Infinity
    }
  },
};

const circleVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { 
      duration: 0.8,
      repeat: Infinity,
      repeatType: "mirror"
    }
  },
};

export function IconTimer({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconTimerProps) {
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
      <motion.line x1="10" x2="14" y1="2" y2="2" variants={prefersReducedMotion ? {} : buttonVariants} />
      <motion.line 
        x1="12" x2="15" y1="14" y2="11" 
        variants={prefersReducedMotion ? {} : handVariants}
        style={{ originX: "12px", originY: "14px" }}
      />
      <motion.circle cx="12" cy="14" r="8" variants={prefersReducedMotion ? {} : circleVariants} />
    </motion.svg>
  );
}
