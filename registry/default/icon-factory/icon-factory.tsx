"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFactoryProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const windowVariants: Variants = {
  rest: { 
    opacity: 1,
  },
  hover: (i: number) => ({
    opacity: [1, 0.3, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconFactory({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconFactoryProps) {
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
      <motion.path d="M12 16h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={0} />
      <motion.path d="M16 16h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={1} />
      <motion.path d="M8 16h.01" variants={prefersReducedMotion ? {} : windowVariants} custom={2} />
      <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
    </motion.svg>
  );
}
