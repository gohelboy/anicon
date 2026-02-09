"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTornadoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const tornadoVariants: Variants = {
  rest: { 
    x: 0,
  },
  hover: (i: number) => ({
    x: [-3, 3, -3],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "linear",
    },
  }),
};

export function IconTornado({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconTornadoProps) {
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
      <motion.path d="M21 4H3" variants={prefersReducedMotion ? {} : tornadoVariants} custom={0} />
      <motion.path d="M18 8H6" variants={prefersReducedMotion ? {} : tornadoVariants} custom={1} />
      <motion.path d="M19 12H9" variants={prefersReducedMotion ? {} : tornadoVariants} custom={2} />
      <motion.path d="M16 16h-6" variants={prefersReducedMotion ? {} : tornadoVariants} custom={3} />
      <motion.path d="M11 20H9" variants={prefersReducedMotion ? {} : tornadoVariants} custom={4} />
    </motion.svg>
  );
}
