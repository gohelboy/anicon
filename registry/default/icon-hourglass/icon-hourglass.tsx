"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconHourglassProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const containerVariants: Variants = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 180,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
};

const sandVariants: Variants = {
  rest: { 
    y: 0,
    opacity: 0
  },
  hover: { 
    y: [0, 15],
    opacity: [0, 1, 0],
    transition: { 
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  },
};

export function IconHourglass({ 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}: IconHourglassProps) {
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
    <div className="relative inline-block">
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
        variants={prefersReducedMotion ? {} : containerVariants}
        {...rest}
      >
        <path d="M5 22h14" />
        <path d="M5 2h14" />
        <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
        <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
        
        {/* Sand particles */}
        <motion.circle cx="12" cy="7" r="0.5" fill="currentColor" variants={sandVariants} />
        <motion.circle cx="12" cy="7" r="0.5" fill="currentColor" variants={sandVariants} transition={{ delay: 0.3 }} />
        <motion.circle cx="12" cy="7" r="0.5" fill="currentColor" variants={sandVariants} transition={{ delay: 0.6 }} />
      </motion.svg>
    </div>
  );
}
