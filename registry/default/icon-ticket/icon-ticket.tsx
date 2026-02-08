"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconTicketProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const lineVariants: Variants = {
  rest: { opacity: 1 },
  hover: (i: number) => ({
    opacity: [1, 0.4, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconTicket({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconTicketProps) {
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
        d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" 
      />
      <motion.path d="M13 5v2" variants={lineVariants} custom={0} />
      <motion.path d="M13 17v2" variants={lineVariants} custom={1} />
      <motion.path d="M13 11v2" variants={lineVariants} custom={2} />
    </motion.svg>
  );
}
