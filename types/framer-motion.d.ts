declare module "framer-motion" {
  import * as React from "react";

  // Minimal, permissive declarations to avoid strict type incompatibilities
  // when using motion SVG components across the icon registry.
  export const motion: any;
  export function useReducedMotion(): boolean;

  export type SVGMotionProps<T = SVGSVGElement> = React.SVGProps<T> & {
    [key: string]: any;
  };

  export type Variants = any;
  export type MotionProps = { [key: string]: any };

  export default {} as any;
}

