"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconRabbitProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const earVariants: Variants = {
  rest: { 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const rabbitVariants: Variants = {
  rest: { 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    y: [0, -1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconRabbit({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconRabbitProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : rabbitVariants}>
        <path d="M13 16a3 3 0 0 1 2.24 5" />
        <path d="M18 12h.01" />
        <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
        <motion.path 
          d="M20 8.54V4a2 2 0 1 0-4 0v3" 
          variants={prefersReducedMotion ? {} : earVariants} 
          style={{ originX: "18px", originY: "7px" }}
        />
        <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
      </motion.g>
    </motion.svg>
  );
}
