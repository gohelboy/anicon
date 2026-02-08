"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTelescopeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const telescopeVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -5, 5, -2, 2, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const lensVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconTelescope({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTelescopeProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...restOptions } = props;
  const prefersReducedMotion = useReducedMotion();

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
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...restOptions}
    >
      <motion.g variants={telescopeVariants} style={{ originX: "12px", originY: "13px" }}>
        {/* Main Body */}
        <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
        <path d="m13.56 11.747 4.332-.924" />
        {/* Lens Detail */}
        <motion.path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" variants={lensVariants} />
        <path d="m6.158 8.633 1.114 4.456" />
      </motion.g>
      {/* Tripod Stand */}
      <path d="m16 21-3.105-6.21" />
      <path d="m8 21 3.105-6.21" />
      <circle cx="12" cy="13" r="2" />
    </motion.svg>
  );
}
