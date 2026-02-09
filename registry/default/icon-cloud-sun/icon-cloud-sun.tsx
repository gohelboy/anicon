"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCloudSunProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const sunVariants: Variants = {
  rest: { 
    rotate: 0,
    opacity: 1,
  },
  hover: {
    rotate: [0, 90],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconCloudSun({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCloudSunProps) {
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
      <motion.g variants={prefersReducedMotion ? {} : sunVariants} style={{ originX: "13px", originY: "13px" }}>
        <path d="M12 2v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="M20 12h2" />
        <path d="m19.07 4.93-1.41 1.41" />
      </motion.g>
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </motion.svg>
  );
}
