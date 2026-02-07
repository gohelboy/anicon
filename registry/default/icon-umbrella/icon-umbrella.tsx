"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUmbrellaProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const canopyVariants: Variants = {
  rest: { scaleX: 1, scaleY: 1 },
  hover: {
    scaleX: [1, 1.05, 1],
    scaleY: [1, 0.95, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const handleVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const rainVariants: Variants = {
  rest: { y: -10, opacity: 0 },
  hover: (i: number) => ({
    y: [-10, 0, 5],
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      delay: i * 0.3,
      ease: "linear",
    },
  }),
};

export function IconUmbrella({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUmbrellaProps) {
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
      {/* Rainfall */}
      <motion.path d="M8 2v2" variants={rainVariants} custom={0} />
      <motion.path d="M12 0v2" variants={rainVariants} custom={1} />
      <motion.path d="M16 2v2" variants={rainVariants} custom={2} />

      {/* Umbrella */}
      <motion.path 
        d="M22 12a10.06 10.06 0 0 0-20 0Z" 
        variants={canopyVariants} 
        style={{ originY: "12px" }} 
      />
      <motion.path 
        d="M12 12v8a2 2 0 0 0 4 0" 
        variants={handleVariants} 
      />
      <path d="M12 2v1" />
    </motion.svg>
  );
}
