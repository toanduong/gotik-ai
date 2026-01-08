/**
 * Motion.dev Animation Utilities
 * Using data attributes for declarative animations
 */

export const motionConfig = {
    // Fade in animations
    fadeIn: {
        'data-motion': 'fade-in',
        'data-motion-duration': '0.6',
        'data-motion-delay': '0',
    },

    // Slide up animations
    slideUp: {
        'data-motion': 'slide-up',
        'data-motion-duration': '0.8',
        'data-motion-distance': '50px',
    },

    // Slide in from left
    slideLeft: {
        'data-motion': 'slide-left',
        'data-motion-duration': '0.7',
        'data-motion-distance': '100px',
    },

    // Slide in from right
    slideRight: {
        'data-motion': 'slide-right',
        'data-motion-duration': '0.7',
        'data-motion-distance': '100px',
    },

    // Scale animations
    scaleIn: {
        'data-motion': 'scale-in',
        'data-motion-duration': '0.5',
        'data-motion-scale': '0.8',
    },

    // Stagger children
    stagger: (delay: number = 0.1) => ({
        'data-motion-stagger': delay.toString(),
    }),
};

// Helper to combine motion configs
export const combineMotion = (...configs: Record<string, string>[]) => {
    return Object.assign({}, ...configs);
};

// Delay helper
export const withDelay = (config: Record<string, string>, delay: number) => ({
    ...config,
    'data-motion-delay': delay.toString(),
});
