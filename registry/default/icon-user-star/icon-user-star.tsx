"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserStarProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const starVariants: Variants = {
  rest: { scale: 1, filter: "drop-shadow(0 0 0px rgba(251, 191, 36, 0))" },
  hover: {
    scale: [1, 1.2, 1],
    filter: [
      "drop-shadow(0 0 0px rgba(251, 191, 36, 0))",
      "drop-shadow(0 0 4px rgba(251, 191, 36, 0.6))",
      "drop-shadow(0 0 0px rgba(251, 191, 36, 0))",
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconUserStar({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserStarProps) {
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
        d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" 
        variants={starVariants}
        style={{ originX: "17px", originY: "17px" }}
      />
      <motion.path d="M8 15H7a4 4 0 0 0-4 4v2" />
      <motion.circle cx="10" cy="7" r="4" />
    </motion.svg>
  );
}
