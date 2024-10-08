export enum MODAL_MOTION_VARIANT_TYPES_ENUM {
    SLIDE = 'slide',
    SLIDE_REVERSE = 'slide-reverse',
    FADE = 'fade',
}

export const MODAL_MOTION_ANIMATION_TYPES = {
    [MODAL_MOTION_VARIANT_TYPES_ENUM.SLIDE]: {
        variants: {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 50 },
        },
        transition: { duration: 0.3 },
    },
    [MODAL_MOTION_VARIANT_TYPES_ENUM.SLIDE_REVERSE]: {
        variants: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -50 },
        },
        transition: { duration: 0.3 },
    },
    [MODAL_MOTION_VARIANT_TYPES_ENUM.FADE]: {
        variants: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            exit: { opacity: 0 },
        },
        transition: { duration: 0.3 },
    },
};
