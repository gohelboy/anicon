"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBlocksProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const blockVariants: Variants = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: (i: number) => ({
    scale: [1, 1.05, 1],
    x: i === 0 ? [0, -1, 0] : 0,
    y: i === 1 ? [0, -1, 0] : 0,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.3,
      ease: "easeInOut",
    },
  }),
};

export function IconBlocks({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBlocksProps) {
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
        d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" 
        variants={blockVariants}
        custom={0}
      />
      <motion.rect 
        x="14" 
        y="2" 
        width="8" 
        height="8" 
        rx="1" 
        variants={blockVariants}
        custom={1}
      />
    </motion.svg>
  );
}
