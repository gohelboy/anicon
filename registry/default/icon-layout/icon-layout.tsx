"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconLayoutProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const sectionVariants: Variants = {
  rest: { opacity: 1 },
  hover: (i: number) => ({
    opacity: [1, 0.4, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.3,
      ease: "easeInOut",
    },
  }),
};

export function IconLayout({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconLayoutProps) {
  const { onAnimationStart, onAnimationEnd, onDragStart, onDrag, onDragEnd, ...restOptions } = props;
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
      {...restOptions}
    >
      {/* Official Lucide Layout Path */}
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <motion.path d="M3 9h18" variants={sectionVariants} custom={0} />
      <motion.path d="M9 21V9" variants={sectionVariants} custom={1} />
    </motion.svg>
  );
}
