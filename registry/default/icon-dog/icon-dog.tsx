"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconDogProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const headVariants: Variants = {
  rest: { 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    rotate: [0, -2, 2, 0],
    transition: {
      duration: 1.5,
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
      duration: 2,
      repeat: Infinity,
      times: [0, 0.1, 0.2],
      repeatDelay: 3
    },
  },
};

const noseVariants: Variants = {
  rest: { 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconDog({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconDogProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : headVariants}>
        <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
        <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
        <motion.path d="M8 14v.5" variants={prefersReducedMotion ? {} : eyeVariants} />
        <motion.path d="M16 14v.5" variants={prefersReducedMotion ? {} : eyeVariants} />
        <motion.path d="M11.25 16.25h1.5L12 17z" variants={prefersReducedMotion ? {} : noseVariants} style={{ originX: "12px", originY: "16.5px" }} />
      </motion.g>
    </motion.svg>
  );
}
