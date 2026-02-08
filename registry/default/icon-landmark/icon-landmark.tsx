"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLandmarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pillarVariants: Variants = {
  rest: { scaleY: 1 },
  hover: (i: number) => ({
    scaleY: [1, 1.1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

const roofVariants: Variants = {
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

export function IconLandmark({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconLandmarkProps) {
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
      <path d="M2 22h20" />
      <motion.path 
        d="M12 2 2 7v2h20V7Z" 
        variants={prefersReducedMotion ? {} : roofVariants} 
      />
      <motion.line x1="6" y1="18" x2="6" y2="11" variants={prefersReducedMotion ? {} : pillarVariants} custom={0} style={{ originY: "18px" }} />
      <motion.line x1="10" y1="18" x2="10" y2="11" variants={prefersReducedMotion ? {} : pillarVariants} custom={1} style={{ originY: "18px" }} />
      <motion.line x1="14" y1="18" x2="14" y2="11" variants={prefersReducedMotion ? {} : pillarVariants} custom={2} style={{ originY: "18px" }} />
      <motion.line x1="18" y1="18" x2="18" y2="11" variants={prefersReducedMotion ? {} : pillarVariants} custom={3} style={{ originY: "18px" }} />
    </motion.svg>
  );
}
