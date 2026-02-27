"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBluetoothProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const pulseVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.6, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconBluetooth({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBluetoothProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...rest } = props;
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
      variants={pulseVariants}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible", originX: "12px", originY: "12px" }}
      {...rest}
    >
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </motion.svg>
  );
}
