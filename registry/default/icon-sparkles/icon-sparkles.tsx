"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSparklesProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const sparkleVariants: Variants = {
  rest: { scale: 1, rotate: 0, opacity: 1 },
  hover: (i: number) => ({
    scale: [1, 1.05, 1],
    rotate: [0, 5, -5, 0],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      delay: i * 0.5,
      ease: "easeInOut",
    },
  }),
};

export function IconSparkles({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconSparklesProps) {
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
      <motion.path 
        d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" 
        variants={sparkleVariants}
        custom={0}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.path d="M20 2v4" variants={sparkleVariants} custom={1} style={{ originX: "20px", originY: "4px" }} />
      <motion.path d="M22 4h-4" variants={sparkleVariants} custom={2} style={{ originX: "20px", originY: "4px" }} />
      <motion.circle cx="4" cy="20" r="2" variants={sparkleVariants} custom={3} />
    </motion.svg>
  );
}
