"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconAlignHorizontalSpaceAroundProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const blockVariants = {
  rest: { scaleX: 1 },
  hover: { scaleX: 0.9 },
  tap: { scaleX: 1.05 },
};

const guideVariants = {
  rest: { opacity: 0.6 },
  hover: { opacity: 1 },
  tap: { opacity: 0.5 },
};

export function IconAlignHorizontalSpaceAround({
  size = 24,
  className,
  ...props
}: IconAlignHorizontalSpaceAroundProps) {
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.rect
        width="6"
        height="10"
        x="9"
        y="7"
        rx="2"
        variants={blockVariants}
        style={{ originX: "50%", originY: "50%" }}
      />
      <motion.path d="M4 22V2" variants={guideVariants} />
      <motion.path d="M20 22V2" variants={guideVariants} />
    </motion.svg>
  );
}
