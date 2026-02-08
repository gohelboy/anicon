"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFishOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bodyVariants: Variants = {
  rest: { 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    x: [0, 0.5, -0.5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const slashVariants: Variants = {
  rest: { 
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    x: [0, -1, 1, -1, 1, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconFishOff({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconFishOffProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : bodyVariants}>
        <path d="M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058" />
        <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618" />
        <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4" />
      </motion.g>
      <motion.path 
        d="M2 2l20 20" 
        variants={prefersReducedMotion ? {} : slashVariants} 
      />
    </motion.svg>
  );
}
