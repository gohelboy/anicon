"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconAsteriskProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const asteriskVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: { 
    rotate: 180,
    scale: 1.2,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
};

export function IconAsterisk({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconAsteriskProps) {
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
      <motion.g 
        variants={prefersReducedMotion ? {} : asteriskVariants}
        style={{ originX: "12px", originY: "12px" }}
      >
        <path d="M12 6v12" />
        <path d="M17.196 9 6.804 15" />
        <path d="M6.804 9 17.196 15" />
      </motion.g>
    </motion.svg>
  );
}
