"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPandaProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pandaVariants: Variants = {
  rest: { 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    y: [0, -1, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const eyeVariants: Variants = {
  rest: { 
    scaleY: 1,
    transition: {
      duration: 0.1
    }
  },
  hover: {
    scaleY: [1, 0.1, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      times: [0, 0.1, 0.2],
      repeatDelay: 4
    },
  },
};

export function IconPanda({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconPandaProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : pandaVariants}>
        {/* Main body/Head */}
        <path d="M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83" />
        {/* Nose */}
        <path d="M11.25 17.25h1.5L12 18z" />
        {/* Eye patches */}
        <path d="m15 12 2 2" />
        <path d="m9 12-2 2" />
        {/* Pupils */}
        <motion.path d="M18 6.5a.5.5 0 0 0-.5-.5" variants={prefersReducedMotion ? {} : eyeVariants} style={{ originX: "17.75px", originY: "6.25px" }} />
        <motion.path d="M6 6.5a.495.495 0 0 1 .5-.5" variants={prefersReducedMotion ? {} : eyeVariants} style={{ originX: "6.25px", originY: "6.25px" }} />
      </motion.g>
    </motion.svg>
  );
}
