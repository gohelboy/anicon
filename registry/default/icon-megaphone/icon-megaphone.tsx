"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconMegaphoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const megaphoneVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -5, 5, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const waveVariants: Variants = {
  rest: { pathLength: 1, opacity: 1, x: 0 },
  hover: {
    pathLength: [1, 0, 1],
    opacity: [1, 0, 1],
    x: [0, 2, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconMegaphone({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconMegaphoneProps) {
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
      <motion.g variants={megaphoneVariants} style={{ originX: "7px", originY: "12px" }}>
        <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
        <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
        <path d="M8 6v8" />
      </motion.g>
      {/* sound waves if they were separate, but megaphone path includes the mouth. 
          Actually Lucide megaphone doesn't have separate waves in this path. 
          Let me double check the retrieved path. 
          Retrieved: megaphone: <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" /> <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" /> <path d="M8 6v8" />
          Ah, there are no waves. I will just stick to megaphone movements.
      */}
    </motion.svg>
  );
}
