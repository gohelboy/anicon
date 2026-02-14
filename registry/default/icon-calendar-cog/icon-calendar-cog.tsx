"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconCalendarCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const cogVariants: Variants = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 180,
    transition: { 
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  },
};

const pinVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: [0, -2, 0],
    transition: { 
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 1
    }
  },
};

export function IconCalendarCog({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconCalendarCogProps) {
  const prefersReducedMotion = useReducedMotion();
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
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`select-none ${className ?? ""}`.trim()}
      initial="rest"
      whileHover="hover"
      {...rest}
    >
      <path d="M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
      <path d="M3 10h18" />
      <motion.path d="M8 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      <motion.path d="M16 2v4" variants={prefersReducedMotion ? {} : pinVariants} />
      
      {/* Cog Group */}
      <motion.g
        variants={prefersReducedMotion ? {} : cogVariants}
        style={{ originX: "18px", originY: "18px" }}
      >
        <path d="m15.228 16.852-.923-.383" />
        <path d="m15.228 19.148-.923.383" />
        <path d="m16.47 14.305.382.923" />
        <path d="m16.852 20.772-.383.924" />
        <path d="m19.148 15.228.383-.923" />
        <path d="m19.53 21.696-.382-.924" />
        <path d="m20.772 16.852.924-.383" />
        <path d="m20.772 19.148.924.383" />
        <circle cx="18" cy="18" r="3" />
      </motion.g>
    </motion.svg>
  );
}
