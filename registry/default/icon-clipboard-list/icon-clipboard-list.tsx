"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconClipboardListProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const clipVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
};

const lineVariants: Variants = {
  rest: { x: 0, opacity: 1 },
  hover: { 
    x: [0, 2, 0],
    transition: { duration: 0.4, ease: "easeInOut" }
  },
};

export function IconClipboardList({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconClipboardListProps) {
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
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <motion.rect 
        width="8" height="4" x="8" y="2" rx="1" ry="1" 
        variants={prefersReducedMotion ? {} : clipVariants} 
      />
      
      {/* List Items */}
      <motion.g variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.1 }}>
        <path d="M12 11h4" />
        <path d="M8 11h.01" />
      </motion.g>
      <motion.g variants={prefersReducedMotion ? {} : lineVariants} transition={{ delay: 0.2 }}>
        <path d="M12 16h4" />
        <path d="M8 16h.01" />
      </motion.g>
    </motion.svg>
  );
}
