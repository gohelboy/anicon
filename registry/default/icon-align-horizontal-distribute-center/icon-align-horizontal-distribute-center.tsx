"use client";

import { motion } from "framer-motion";

export interface IconAlignHorizontalDistributeCenterProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const leftVariants = {
  rest: { x: 0 },
  hover: { x: 1.5 },
  tap: { x: -1 },
};

const rightVariants = {
  rest: { x: 0 },
  hover: { x: -1.5 },
  tap: { x: 1 },
};

const guideVariants = {
  rest: { opacity: 0.6 },
  hover: { opacity: 1 },
  tap: { opacity: 0.5 },
};

export function IconAlignHorizontalDistributeCenter({
  size = 24,
  className,
  ...props
}: IconAlignHorizontalDistributeCenterProps) {
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
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.rect width="6" height="14" x="4" y="5" rx="2" variants={leftVariants} />
      <motion.rect width="6" height="10" x="14" y="7" rx="2" variants={rightVariants} />
      <motion.path d="M17 22v-5" variants={guideVariants} />
      <motion.path d="M17 7V2" variants={guideVariants} />
      <motion.path d="M7 22v-3" variants={guideVariants} />
      <motion.path d="M7 5V2" variants={guideVariants} />
    </motion.svg>
  );
}
