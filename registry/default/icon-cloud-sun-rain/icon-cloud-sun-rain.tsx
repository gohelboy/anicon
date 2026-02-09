"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCloudSunRainProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rainVariants: Variants = {
  rest: { 
    y: 0,
    opacity: 1,
  },
  hover: (i: number) => ({
    y: 5,
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeIn",
    },
  }),
};

const sunVariants: Variants = {
  rest: { 
    rotate: 0,
  },
  hover: {
    rotate: [0, 90],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconCloudSunRain({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCloudSunRainProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : sunVariants} style={{ originX: "13px", originY: "13px" }}>
        <path d="M12 2v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="M20 12h2" />
        <path d="m19.07 4.93-1.41 1.41" />
      </motion.g>
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
      <motion.path d="M11 20v2" variants={prefersReducedMotion ? {} : rainVariants} custom={0} />
      <motion.path d="M7 19v2" variants={prefersReducedMotion ? {} : rainVariants} custom={1} />
    </motion.svg>
  );
}
