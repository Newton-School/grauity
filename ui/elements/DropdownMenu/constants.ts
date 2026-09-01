export const ANIMATION_DURATION_IN_MILLISECONDS = 200;
export const DROPDOWN_MENU_MAX_HEIGHT = 500;
export const DROPDOWN_MENU_DEFAULT_WIDTH = 300;

/** Smallest gap kept between the dropdown menu and the edge of the viewport. */
export const DROPDOWN_MENU_VIEWPORT_GAP = 20;

/**
 * Vertical offset the menu settles at, away from its trigger. It is applied as a
 * transform by the entry animation below, so it does not show up in the menu's
 * own box and has to be added back when fitting the menu to the viewport.
 */
export const DROPDOWN_MENU_OFFSET_Y = 8;

export const FRAMER_MOTION_PROPS = {
    initial: 'hidden',
    animate: 'visible',
    exit: 'exit',
    variants: {
        hidden: { y: `-${DROPDOWN_MENU_OFFSET_Y}px`, opacity: 0 },
        visible: { y: `${DROPDOWN_MENU_OFFSET_Y}px`, opacity: 1 },
        exit: { y: `-${DROPDOWN_MENU_OFFSET_Y}px`, opacity: 0 },
    },
    transition: { duration: ANIMATION_DURATION_IN_MILLISECONDS / 1000 },
};
