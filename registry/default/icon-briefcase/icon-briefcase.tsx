"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconBriefcaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const handleVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

const bagVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -2, 2, 0],
    scale: 1.02,
    transition: { duration: 0.4 },
  },
};

export function IconBriefcase({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconBriefcaseProps) {
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
      <motion.rect width="20" height="14" x="2" y="7" rx="2" variants={bagVariants} style={{ originX: "50%", originY: "100%" }} />
      <motion.path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" variants={handleVariants} />
    </motion.svg>
  );
}
