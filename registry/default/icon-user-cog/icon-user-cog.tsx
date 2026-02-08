"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconUserCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const cogVariants: Variants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function IconUserCog({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconUserCogProps) {
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
      <motion.path d="M10 15H6a4 4 0 0 0-4 4v2" />
      <motion.circle cx="9" cy="7" r="4" />
      <motion.g variants={cogVariants} style={{ originX: "18px", originY: "15px" }}>
        <path d="m14.305 16.53.923-.382" />
        <path d="m15.228 13.852-.923-.383" />
        <path d="m16.852 12.228-.383-.923" />
        <path d="m16.852 17.772-.383.924" />
        <path d="m19.148 12.228.383-.923" />
        <path d="m19.53 18.696-.382-.924" />
        <path d="m20.772 13.852.924-.383" />
        <path d="m20.772 16.148.924.383" />
        <circle cx="18" cy="15" r="3" />
      </motion.g>
    </motion.svg>
  );
}
