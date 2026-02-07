"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTerminalProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Cursor blinks like a real terminal
const cursorVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0, 1, 0, 1],
    transition: { duration: 1.2, repeat: Infinity, repeatType: "loop" },
  },
};

// Prompt arrow shifts like typing
const promptVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: [0, 2, 0],
    transition: { duration: 0.5, repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 },
  },
};

export function IconTerminal({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTerminalProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

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
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      {/* Terminal prompt > */}
      <motion.polyline points="4 17 10 11 4 5" variants={promptVariants} />
      
      {/* Cursor line - blinks */}
      <motion.line x1="12" x2="20" y1="19" y2="19" variants={cursorVariants} />
    </motion.svg>
  );
}
