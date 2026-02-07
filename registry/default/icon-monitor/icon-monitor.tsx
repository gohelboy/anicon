"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMonitorProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const screenVariants: Variants = {
  rest: { opacity: 1, scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
};

const glowVariants: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: [0, 0.2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconMonitor({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMonitorProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...restOptions } = props;
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
      {...restOptions}
    >
      <motion.rect 
        width="20" 
        height="14" 
        x="2" 
        y="3" 
        rx="2" 
        variants={screenVariants}
      />
      {/* Screen Glow */}
      <motion.rect 
        width="16" 
        height="10" 
        x="4" 
        y="5" 
        rx="1" 
        fill="currentColor"
        variants={glowVariants}
        stroke="none"
      />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </motion.svg>
  );
}
