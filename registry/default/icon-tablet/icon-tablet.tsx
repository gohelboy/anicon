"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTabletProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const deviceVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
};

const screenPulse: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: [0, 0.15, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconTablet({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTabletProps) {
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
      variants={deviceVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...restOptions}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      {/* Internal screen pulse */}
      <motion.rect 
        width="12" 
        height="14" 
        x="6" 
        y="4" 
        rx="1" 
        fill="currentColor"
        variants={screenPulse}
        stroke="none"
      />
      <path d="M12 18h.01" />
    </motion.svg>
  );
}
