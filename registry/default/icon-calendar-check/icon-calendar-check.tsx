"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const calendarVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1,
    transition: { duration: 0.2 }
  },
};

const checkVariants: Variants = {
  rest: { pathLength: 0, opacity: 0 },
  hover: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { duration: 0.4, ease: "easeOut" },
      opacity: { duration: 0.2 }
    }
  },
};

const pinVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: [0, -2, 0],
    transition: { 
      duration: 0.4,
      repeat: Infinity,
      repeatDelay: 1
    }
  },
};

export function IconCalendarCheck({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarCheckProps) {
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
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <motion.path 
        d="m9 16 2 2 4-4" 
        variants={prefersReducedMotion ? {} : checkVariants}
      />
    </motion.svg>
  );
}
