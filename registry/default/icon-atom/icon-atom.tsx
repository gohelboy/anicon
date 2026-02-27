"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconAtomProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const orbit1Variants: Variants = {
  rest: { opacity: 1 },
  hover: {
    rotate: 360,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const orbit2Variants: Variants = {
  rest: { opacity: 1 },
  hover: {
    rotate: -360,
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const nucleusVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.4, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function IconAtom({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconAtomProps) {
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
      <motion.circle cx="12" cy="12" r="1" variants={nucleusVariants} />
      <motion.path 
        d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" 
        variants={orbit1Variants}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.path 
        d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" 
        variants={orbit2Variants}
        style={{ originX: "12px", originY: "12px" }}
      />
    </motion.svg>
  );
}
