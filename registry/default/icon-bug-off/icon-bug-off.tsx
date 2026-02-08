"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBugOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const slashVariants: Variants = {
  rest: { 
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    x: [0, -1, 1, -1, 1, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const bugVariants: Variants = {
  rest: { 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    rotate: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconBugOff({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconBugOffProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : bugVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="M12 20v-8" />
        <path d="M12.656 7H14a4 4 0 0 1 4 4v1.344" />
        <path d="M14.12 3.88 16 2" />
        <path d="M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287" />
        <path d="M21 5a4 4 0 0 1-3.55 3.97" />
        <path d="M22 13h-3.344" />
        <path d="M3 21a4 4 0 0 1 3.81-4" />
        <path d="M3 5a4 4 0 0 0 3.55 3.97" />
        <path d="M6 13H2" />
        <path d="m8 2 1.88 1.88" />
        <path d="M9.712 4.06A3 3 0 0 1 15 6v1.13" />
      </motion.g>
      <motion.path 
        d="m2 2 20 20" 
        variants={prefersReducedMotion ? {} : slashVariants}
      />
    </motion.svg>
  );
}
