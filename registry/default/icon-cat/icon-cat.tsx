"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCatProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const catVariants: Variants = {
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
      duration: 2,
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
      duration: 1.5,
      repeat: Infinity,
      times: [0, 0.1, 0.2],
      repeatDelay: 2
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
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconCat({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCatProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : catVariants}>
        <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
        <motion.path d="M8 14v.5" variants={prefersReducedMotion ? {} : eyeVariants} />
        <motion.path d="M16 14v.5" variants={prefersReducedMotion ? {} : eyeVariants} />
        <motion.path d="M11.25 16.25h1.5L12 17l-.75-.75Z" variants={prefersReducedMotion ? {} : noseVariants} style={{ originX: "12px", originY: "16.5px" }} />
      </motion.g>
    </motion.svg>
  );
}
