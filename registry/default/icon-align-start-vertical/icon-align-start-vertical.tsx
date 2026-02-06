"use client";

import { motion } from "framer-motion";

export interface IconAlignStartVerticalProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const blockVariants = {
  rest: { y: 0 },
  hover: { y: -1.5 },
  tap: { y: 1 },
};

const guideVariants = {
  rest: { opacity: 0.7 },
  hover: { opacity: 1 },
  tap: { opacity: 0.6 },
};

export function IconAlignStartVertical({ size = 24, className, ...props }: IconAlignStartVerticalProps) {
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
      <motion.rect width="9" height="6" x="6" y="14" rx="2" variants={blockVariants} />
      <motion.rect width="16" height="6" x="6" y="4" rx="2" variants={blockVariants} />
      <motion.path d="M2 2v20" variants={guideVariants} />
    </motion.svg>
  );
}
