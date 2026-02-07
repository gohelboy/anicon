"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface IconEyeProps extends React.SVGProps<SVGSVGElement> {
  /** Size in pixels. Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

const eyelidVariants: Variants = {
  rest: { scaleY: 1 },
  hover: {
    scaleY: [1, 0.05, 0.05, 1],
    transition: { 
      duration: 0.4,
      times: [0, 0.3, 0.5, 1],
      ease: "easeInOut"
    },
  },
  tap: {
    scaleY: [1, 0.05, 0.05, 0.05, 1],
    transition: { 
      duration: 0.5,
      times: [0, 0.2, 0.4, 0.6, 1],
    },
  },
};

const pupilVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 0, 0, 1],
    transition: { 
      duration: 0.4,
      times: [0, 0.3, 0.5, 1],
    },
  },
  tap: {
    scale: [1, 0, 0, 0, 1],
    transition: { 
      duration: 0.5,
      times: [0, 0.2, 0.4, 0.6, 1],
    },
  },
};

export function IconEye({
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconEyeProps) {
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
      {/* Eye shape - blinks via scaleY */}
      <motion.g
        variants={eyelidVariants}
        style={{ originY: "50%", originX: "50%" }}
      >
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      </motion.g>
      
      {/* Pupil - disappears during blink */}
      <motion.circle 
        cx="12" 
        cy="12" 
        r="3" 
        variants={pupilVariants}
      />
    </motion.svg>
  );
}
