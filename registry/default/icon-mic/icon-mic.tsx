"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMicProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Microphone pulses like receiving audio
const micVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.05, 0.98, 1.03, 1],
    transition: { duration: 0.5, repeat: Infinity, repeatType: "loop" },
  },
};

// Sound waves emanate
const waveVariants: Variants = {
  rest: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: [0, 0.8, 0],
    scale: [0.8, 1.2, 1.4],
    transition: { duration: 0.8, repeat: Infinity, repeatType: "loop" },
  },
};

export function IconMic({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMicProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-4 -4 32 32"
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
      {/* Sound wave rings */}
      <motion.circle 
        cx="12" 
        cy="8" 
        r="8" 
        variants={waveVariants}
        fill="none"
        strokeWidth={1}
      />
      
      {/* Microphone body - pulses */}
      <motion.g variants={micVariants}>
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </motion.g>
    </motion.svg>
  );
}
