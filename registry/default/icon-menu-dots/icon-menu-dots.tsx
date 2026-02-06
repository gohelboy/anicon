"use client";

import { motion } from "framer-motion";

export interface IconMenuDotsProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const dotVariants = {
  rest: (index: number) => ({
    scale: 1,
    y: 0,
    transition: { delay: index * 0.05 },
  }),
  hover: (index: number) => ({
    scale: 1.2,
    y: index % 2 === 0 ? -1 : 1,
    transition: { delay: index * 0.05, type: "spring", stiffness: 500 },
  }),
  tap: { scale: 0.9 },
};

export function IconMenuDots({ size = 24, className, ...props }: IconMenuDotsProps) {
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
      fill="currentColor"
      stroke="none"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.circle cx="6" cy="12" r="1.6" variants={dotVariants} custom={0} />
      <motion.circle cx="12" cy="12" r="1.6" variants={dotVariants} custom={1} />
      <motion.circle cx="18" cy="12" r="1.6" variants={dotVariants} custom={2} />
    </motion.svg>
  );
}
