"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCloudRainProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rainVariants: Variants = {
  rest: { y: 0, opacity: 1 },
  hover: (i: number) => ({
    y: [0, 4, 0],
    opacity: [1, 0.4, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconCloudRain({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconCloudRainProps) {
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <motion.path d="M16 14v6" variants={rainVariants} custom={0} />
      <motion.path d="M8 14v6" variants={rainVariants} custom={1} />
      <motion.path d="M12 16v6" variants={rainVariants} custom={2} />
    </motion.svg>
  );
}
