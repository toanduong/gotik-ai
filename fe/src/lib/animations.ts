import { Variants } from 'framer-motion';

export const motionConfig = {
    fadeInUp: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    } as Variants,
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    } as Variants
};

export const withDelay = (variants: Variants, delay: number): Variants => {
    const newVariants = { ...variants };
    if (newVariants.visible) {
        newVariants.visible = {
            ...newVariants.visible as any,
            transition: {
                ...(newVariants.visible as any).transition,
                delay
            }
        };
    }
    return newVariants;
};
