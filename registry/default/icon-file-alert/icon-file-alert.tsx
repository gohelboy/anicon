"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconFileAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}


const exclamationVariants: Variants = {
  rest: { opacity: 1, scale: 1 },
  hover: {
    opacity: [1, 0.4, 1],
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconFileAlert({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconFileAlertProps) {
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
      <motion.path 
        d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" 
       
      />
      <motion.g variants={exclamationVariants} style={{ originX: "12px", originY: "12px" }}>
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </motion.g>
    </motion.svg>
  );
}
