"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconGamepad2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const buttonVariants: Variants = {
  rest: { scale: 1, opacity: 1 },
  hover: (i: number) => ({
    scale: [1, 1.2, 1],
    opacity: [1, 0.6, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

const dpadVariants: Variants = {
  rest: { y: 0, x: 0 },
  hover: {
    y: [0, -0.2, 0.2, 0],
    x: [0, 0.2, -0.2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconGamepad2({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconGamepad2Props) {
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
      <motion.g variants={dpadVariants}>
        <line x1="6" x2="10" y1="11" y2="11" />
        <line x1="8" x2="8" y1="9" y2="13" />
      </motion.g>
      <motion.line x1="15" x2="15.01" y1="12" y2="12" variants={buttonVariants} custom={0} style={{ originX: "15px", originY: "12px" }} />
      <motion.line x1="18" x2="18.01" y1="10" y2="10" variants={buttonVariants} custom={1} style={{ originX: "18px", originY: "10px" }} />
      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
    </motion.svg>
  );
}
