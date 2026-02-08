"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconSchoolProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const bellVariants: Variants = {
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
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const doorVariants: Variants = {
  rest: { 
    scaleY: 1,
  },
  hover: {
    scaleY: [1, 0.6, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconSchool({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconSchoolProps) {
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
      <motion.path 
        d="M14 21v-3a2 2 0 0 0-10 0v3" 
        variants={prefersReducedMotion ? {} : doorVariants}
        style={{ originY: "21px" }}
      />
      <path d="M18 5v16" />
      <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
      <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
      <path d="M6 5v16" />
      <motion.circle 
        cx="12" cy="9" r="2" 
        variants={prefersReducedMotion ? {} : bellVariants} 
      />
    </motion.svg>
  );
}
