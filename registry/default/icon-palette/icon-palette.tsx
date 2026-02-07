"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconPaletteProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const dotVariants: Variants = {
  rest: { scale: 1 },
  hover: (i: number) => ({
    scale: [1, 1.5, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

export function IconPalette({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconPaletteProps) {
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
      {/* Official Lucide Palette Path */}
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.688-1.688h1.906c3.106 0 5.625-2.519 5.625-5.625 0-4.826-4.102-8.75-9-8.75Z" />
      
      {/* Official Color Spots */}
      <motion.path d="M13.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" variants={dotVariants} custom={0} fill="currentColor" />
      <motion.path d="M17.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" variants={dotVariants} custom={1} fill="currentColor" />
      <motion.path d="M8.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" variants={dotVariants} custom={2} fill="currentColor" />
      <motion.path d="M6.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" variants={dotVariants} custom={3} fill="currentColor" />
    </motion.svg>
  );
}
