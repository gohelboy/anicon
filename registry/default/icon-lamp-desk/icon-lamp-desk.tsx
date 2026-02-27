"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLampDeskProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const headVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, 10, -5, 0],
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const glowVariants: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: [0, 0.6, 0],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
};

export function IconLampDesk({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLampDeskProps) {
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
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      style={{ overflow: "visible" }}
      {...rest}
    >
      <motion.g variants={headVariants} style={{ originX: "9px", originY: "7px" }}>
        <path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z" />
        <path d="m14.207 4.793-3.414 3.414" />
        <motion.circle cx="16" cy="10" r="3" fill="currentColor" stroke="none" variants={glowVariants} />
      </motion.g>
      <path d="M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" />
    </motion.svg>
  );
}
