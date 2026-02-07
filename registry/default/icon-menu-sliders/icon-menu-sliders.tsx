"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface IconMenuSlidersProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
}

const knobVariants = {
  rest: (index: number) => ({
    x: 0,
    transition: { delay: index * 0.05 },
  }),
  hover: (index: number) => ({
    x: index % 2 === 0 ? 2 : -2,
    transition: { delay: index * 0.05, type: "spring", stiffness: 500 },
  }),
  tap: { scale: 0.9 },
};

export function IconMenuSliders({
  size = 24,
  className,
  ...props
}: IconMenuSlidersProps) {
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
      className={`outline-none focus:outline-none focus:ring-0 select-none ${className ?? ""}`.trim()}
      {...rest}
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <motion.circle cx="9" cy="6" r="2" variants={knobVariants} custom={0} />
      <motion.circle cx="15" cy="12" r="2" variants={knobVariants} custom={1} />
      <motion.circle cx="11" cy="18" r="2" variants={knobVariants} custom={2} />
    </motion.svg>
  );
}
