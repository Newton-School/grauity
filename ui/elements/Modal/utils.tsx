import { MODAL_MOTION_ANIMATION_TYPES } from './constants';
import { ModalAnimationType } from './types';

/**
 * Get the animation props for the modal. To be used with the `motion.div` component.
 *
 * @param animatePresence - The animation type to use.
 * @returns The animation props.
 */
export const getModalAnimationProps = (animatePresence: ModalAnimationType) => {
    const animationProps = {
        initial: 'hidden',
        animate: 'visible',
        exit: 'exit',
        ...(animatePresence
            ? MODAL_MOTION_ANIMATION_TYPES[animatePresence]
            : {}),
    };

    return animationProps;
};
