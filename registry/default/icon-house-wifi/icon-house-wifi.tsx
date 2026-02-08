"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHouseWifiProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const wifiVariants: Variants = {
  rest: { 
    opacity: 1,
  },
  hover: (i: number) => ({
    opacity: [1, 0, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconHouseWifi({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconHouseWifiProps) {
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
      <motion.path d="M9.5 13.866a4 4 0 0 1 5 .01" variants={prefersReducedMotion ? {} : wifiVariants} custom={1} />
      <motion.path d="M12 17h.01" variants={prefersReducedMotion ? {} : wifiVariants} custom={0} />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <motion.path d="M7 10.754a8 8 0 0 1 10 0" variants={prefersReducedMotion ? {} : wifiVariants} custom={2} />
    </motion.svg>
  );
}
