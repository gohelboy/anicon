/**
 * Shared TypeScript types for Anicon icons
 */

import type { SVGProps } from "react";

/**
 * Base props for all animated icon components
 */
export interface IconProps extends Omit<SVGProps<SVGSVGElement>,
    'onAnimationStart' | 'onAnimationEnd' | 'onDragStart' | 'onDrag' | 'onDragEnd'
> {
    /** Icon size in pixels. Default: 24 */
    size?: number;
    /** Stroke width. Default: 2 */
    strokeWidth?: number;
}

/**
 * Animation variant definitions for Framer Motion
 */
export interface AnimationVariants {
    initial?: Record<string, unknown>;
    rest?: Record<string, unknown>;
    hover?: Record<string, unknown>;
    tap?: Record<string, unknown>;
}

/**
 * Registry entry for icon metadata
 */
export interface IconRegistryEntry {
    name: string;
    component: React.ComponentType<IconProps>;
    color: string;
    description: string;
    tags: string[];
}

/**
 * Animation type categories
 */
export type AnimationType =
    | "directional_move"
    | "rotate"
    | "scale"
    | "open_close"
    | "swing_shake"
    | "stroke_draw"
    | "opacity_fade"
    | "morph";
