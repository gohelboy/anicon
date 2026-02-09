"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCloudSnowProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const snowVariants: Variants = {
  rest: { 
    y: 0,
    opacity: 1,
  },
  hover: (i: number) => ({
    y: [0, 4, 0],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconCloudSnow({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCloudSnowProps) {
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <motion.path d="M8 15h.01" variants={prefersReducedMotion ? {} : snowVariants} custom={0} />
      <motion.path d="M8 19h.01" variants={prefersReducedMotion ? {} : snowVariants} custom={1} />
      <motion.path d="M12 17h.01" variants={prefersReducedMotion ? {} : snowVariants} custom={2} />
      <motion.path d="M12 21h.01" variants={prefersReducedMotion ? {} : snowVariants} custom={3} />
      <motion.path d="M16 15h.01" variants={prefersReducedMotion ? {} : snowVariants} custom={4} />
      <motion.path d="M16 19h.01" variants={prefersReducedMotion ? {} : snowVariants} custom={5} />
    </motion.svg>
  );
}
