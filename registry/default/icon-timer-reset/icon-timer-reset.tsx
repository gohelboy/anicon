"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTimerResetProps extends React.SVGProps<SVGSVGElement> {
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

const resetVariants: Variants = {
  rest: { rotate: 0 },
  hover: { 
    rotate: -360,
    transition: { 
      duration: 0.8,
      ease: "easeInOut"
    }
  },
};

const handVariants: Variants = {
  rest: { opacity: 1 },
  hover: { 
    opacity: [1, 0, 1],
    transition: { duration: 0.4, times: [0, 0.5, 1] }
  },
};

export function IconTimerReset({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconTimerResetProps) {
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
      <motion.path d="M10 2h4" variants={prefersReducedMotion ? {} : buttonVariants} />
      <motion.path d="M12 14v-4" variants={prefersReducedMotion ? {} : handVariants} />
      
      {/* Reset Arrow Group */}
      <motion.g
        variants={prefersReducedMotion ? {} : resetVariants}
        style={{ originX: "12px", originY: "14px" }}
      >
        <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
        <path d="M9 17H4v5" />
      </motion.g>
    </motion.svg>
  );
}
