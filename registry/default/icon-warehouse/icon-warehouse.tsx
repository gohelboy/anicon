"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconWarehouseProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rollerVariants: Variants = {
  rest: { 
    scaleY: 1,
  },
  hover: (i: number) => ({
    scaleY: [1, 0, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconWarehouse({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconWarehouseProps) {
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
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" />
      <motion.g variants={prefersReducedMotion ? {} : rollerVariants} style={{ originY: "9px" }}>
        <path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" />
        <path d="M6 13h12" />
        <path d="M6 17h12" />
      </motion.g>
    </motion.svg>
  );
}
