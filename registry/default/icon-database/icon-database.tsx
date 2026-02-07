"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconDatabaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const layerVariants: Variants = {
  rest: { scaleY: 1, y: 0 },
  hover: (i: number) => ({
    scaleY: [1, 1.05, 1],
    y: i === 0 ? -2 : i === 2 ? 2 : 0,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export function IconDatabase({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconDatabaseProps) {
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
      <motion.ellipse cx="12" cy="5" rx="9" ry="3" variants={layerVariants} custom={0} />
      <motion.path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" variants={layerVariants} custom={2} />
      <motion.path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" variants={layerVariants} custom={1} />
    </motion.svg>
  );
}
