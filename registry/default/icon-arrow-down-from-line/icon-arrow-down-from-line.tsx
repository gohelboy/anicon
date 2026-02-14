"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconArrowDownFromLineProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const arrowVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, 2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const lineVariants: Variants = {
  rest: { scaleX: 1, opacity: 1 },
  hover: {
    scaleX: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconArrowDownFromLine({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconArrowDownFromLineProps) {
  const {
    onAnimationStart,
    onAnimationEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    ...rest
  } = props;
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
      initial="rest"
      whileHover="hover"
      whileTap={prefersReducedMotion ? undefined : "tap"}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.path
        d="M19 3H5"
        variants={prefersReducedMotion ? {} : lineVariants}
        style={{ originX: "50%", originY: "50%" }}
      />
      <motion.g variants={prefersReducedMotion ? {} : arrowVariants}>
        <path d="M12 21V7" />
        <path d="m6 15 6 6 6-6" />
      </motion.g>
    </motion.svg>
  );
}
