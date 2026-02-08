"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUtilityPoleProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const poleVariants: Variants = {
  rest: { 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconUtilityPole({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconUtilityPoleProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : poleVariants} style={{ originX: "12px", originY: "22px" }}>
        <path d="M12 2v20" />
        <path d="M2 5h20" />
        <path d="M3 3v2" />
        <path d="M7 3v2" />
        <path d="M17 3v2" />
        <path d="M21 3v2" />
        <path d="m19 5-7 7-7-7" />
      </motion.g>
    </motion.svg>
  );
}
