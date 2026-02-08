"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconQrCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const rectVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const bitVariants: Variants = {
  rest: { opacity: 1 },
  hover: (i: number) => ({
    opacity: [1, 0.4, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};

export function IconQrCode({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconQrCodeProps) {
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
      <motion.rect width="5" height="5" x="3" y="3" rx="1" variants={rectVariants} style={{ originX: "5.5px", originY: "5.5px" }} />
      <motion.rect width="5" height="5" x="16" y="3" rx="1" variants={rectVariants} style={{ originX: "18.5px", originY: "5.5px" }} />
      <motion.rect width="5" height="5" x="3" y="16" rx="1" variants={rectVariants} style={{ originX: "5.5px", originY: "18.5px" }} />
      <motion.path d="M21 16h-3a2 2 0 0 0-2 2v3" variants={bitVariants} custom={0} />
      <motion.path d="M21 21v.01" variants={bitVariants} custom={1} />
      <motion.path d="M12 7v3a2 2 0 0 1-2 2H7" variants={bitVariants} custom={2} />
      <motion.path d="M3 12h.01" variants={bitVariants} custom={3} />
      <motion.path d="M12 3h.01" variants={bitVariants} custom={4} />
      <motion.path d="M12 16v.01" variants={bitVariants} custom={5} />
      <motion.path d="M16 12h1" variants={bitVariants} custom={6} />
      <motion.path d="M21 12v.01" variants={bitVariants} custom={7} />
      <motion.path d="M12 21v-1" variants={bitVariants} custom={8} />
    </motion.svg>
  );
}
