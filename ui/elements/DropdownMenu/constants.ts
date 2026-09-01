export const ANIMATION_DURATION_IN_MILLISECONDS = 200;
export const DROPDOWN_MENU_MAX_HEIGHT = 500;
export const DROPDOWN_MENU_DEFAULT_WIDTH = 300;

/** Smallest gap kept between the dropdown menu and the edge of the viewport. */
export const DROPDOWN_MENU_VIEWPORT_GAP = 20;

export const FRAMER_MOTION_PROPS = {
    initial: 'hidden',
    animate: 'visible',
    exit: 'exit',
    variants: {
        hidden: { y: '-8px', opacity: 0 },
        visible: { y: '8px', opacity: 1 },
        exit: { y: '-8px', opacity: 0 },
    },
    transition: { duration: ANIMATION_DURATION_IN_MILLISECONDS / 1000 },
};
