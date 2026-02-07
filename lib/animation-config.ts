/**
 * Centralized animation configuration for Anicon
 * Ensures consistent animation behavior across all icons
 */

export const animationConfig = {
    // Transition presets
    transitions: {
        /** Standard spring for most interactions */
        spring: {
            type: "spring" as const,
            stiffness: 400,
            damping: 17,
        },

        /** Bouncier spring for playful effects (hearts, stars) */
        springBouncy: {
            type: "spring" as const,
            stiffness: 300,
            damping: 10,
        },

        /** Quick spring for snappy feedback */
        springSnappy: {
            type: "spring" as const,
            stiffness: 500,
            damping: 20,
        },

        /** Tween for linear/predictable animations */
        tween: {
            type: "tween" as const,
            duration: 0.3,
            ease: "easeInOut" as const,
        },

        /** Fast tween for tap responses */
        tweenFast: {
            type: "tween" as const,
            duration: 0.2,
            ease: "easeOut" as const,
        },
    },

    // Movement distances in pixels
    distances: {
        small: 3,
        medium: 5,
        large: 8,
    },

    // Rotation amounts in degrees
    rotations: {
        small: 15,
        medium: 45,
        large: 90,
        full: 360,
    },

    // Scale factors
    scales: {
        shrink: 0.9,
        shrinkSmall: 0.95,
        grow: 1.1,
        growSmall: 1.05,
        growLarge: 1.2,
    },

    // Shake/ring sequences (for bell, alert icons)
    sequences: {
        ring: [0, -20, 20, -15, 15, -10, 10, 0],
        shake: [0, -5, 5, -5, 5, 0],
        wiggle: [0, -3, 3, -3, 3, 0],
    },

    // Durations
    durations: {
        fast: 0.2,
        normal: 0.3,
        slow: 0.5,
        ring: 0.6,
    },
} as const;

// Type exports for use in components
export type TransitionType = keyof typeof animationConfig.transitions;
export type DistanceType = keyof typeof animationConfig.distances;
export type RotationType = keyof typeof animationConfig.rotations;
export type ScaleType = keyof typeof animationConfig.scales;
