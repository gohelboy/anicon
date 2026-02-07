"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconMenuDotsVerticalProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const dotVariants = {
  rest: (index: number) => ({
    scale: 1,
    x: 0,
    transition: { delay: index * 0.06 },
  }),
  hover: (index: number) => ({
    scale: 1.15,
    x: index % 2 === 0 ? -1 : 1,
    transition: { delay: index * 0.06, type: "spring", stiffness: 500 },
  }),
  tap: { scale: 0.9 },
};

export function IconMenuDotsVertical({
  size = 24,
  className,
  ...props
}: IconMenuDotsVerticalProps) {
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
      fill="currentColor"
      stroke="none"
      initial={prefersReducedMotion ? false : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <motion.circle cx="12" cy="6" r="1.6" variants={dotVariants} custom={0} />
      <motion.circle cx="12" cy="12" r="1.6" variants={dotVariants} custom={1} />
      <motion.circle cx="12" cy="18" r="1.6" variants={dotVariants} custom={2} />
    </motion.svg>
  );
}
