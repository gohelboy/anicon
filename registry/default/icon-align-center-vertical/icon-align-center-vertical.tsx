"use client";

import { motion } from "framer-motion";

export interface IconAlignCenterVerticalProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const guideVariants = {
  rest: { scaleY: 1 },
  hover: { scaleY: 1.08 },
  tap: { scaleY: 0.95 },
};

const topVariants = {
  rest: { y: 0 },
  hover: { y: 1.5 },
  tap: { y: -1 },
};

const bottomVariants = {
  rest: { y: 0 },
  hover: { y: -1.5 },
  tap: { y: 1 },
};

export function IconAlignCenterVertical({
  size = 24,
  className,
  ...props
}: IconAlignCenterVerticalProps) {
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
      <motion.path
        d="M12 2v20"
        variants={guideVariants}
        style={{ originX: "50%", originY: "50%" }}
      />
      <motion.g variants={topVariants}>
        <path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" />
        <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
      </motion.g>
      <motion.g variants={bottomVariants}>
        <path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" />
        <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
      </motion.g>
    </motion.svg>
  );
}
