"use client";

import { motion } from "framer-motion";

export interface IconMenuProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const lineVariants = {
  rest: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: index * 0.05 },
  }),
  hover: (index: number) => ({
    x: index % 2 === 0 ? 2 : -2,
    opacity: 0.9,
    transition: { delay: index * 0.05, type: "spring", stiffness: 500 },
  }),
  tap: { scaleX: 0.92 },
};

export function IconMenu({ size = 24, className, ...props }: IconMenuProps) {
  const {
    onAnimationStart,
    onAnimationEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    ...rest
  } = props;
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.line
        x1="4"
        x2="20"
        y1="6"
        y2="6"
        variants={lineVariants}
        custom={0}
      />
      <motion.line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
        variants={lineVariants}
        custom={1}
      />
      <motion.line
        x1="4"
        x2="20"
        y1="18"
        y2="18"
        variants={lineVariants}
        custom={2}
      />
    </motion.svg>
  );
}
