"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBikeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const wheelVariants: Variants = {
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

const bodyVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, -0.5, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconBike({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBikeProps) {
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
      <motion.circle cx="18.5" cy="17.5" r="3.5" variants={wheelVariants} style={{ originX: "18.5px", originY: "17.5px" }} />
      <motion.circle cx="5.5" cy="17.5" r="3.5" variants={wheelVariants} style={{ originX: "5.5px", originY: "17.5px" }} />
      <circle cx="15" cy="5" r="1" />
      <motion.path d="M12 17.5V14l-3-3 4-3 2 3h2" variants={bodyVariants} />
    </motion.svg>
  );
}
