import {
    MODAL_MOTION_ANIMATION_TYPES,
    MODAL_MOTION_VARIANT_TYPES_ENUM,
} from './constants';
import { ModalAnimationType } from './types';

/**
 * Get the `framer-motion` animation props for the `emanate` modal animation.
 *
 * @param clientX - The x coordinate of the client.
 * @param clientY - The y coordinate of the client.
 * @returns The animation props.
 */
const getEmanateModalAnimationProps = (clientX: number, clientY: number) => {
    let x: Number;
    let y: Number;
    try {
        x = clientX - window.innerWidth / 2;
        y = clientY - window.innerHeight / 2;
    } catch (e) {
        x = 0;
        y = 0;
    }
    return {
        initial: 'hidden',
        animate: 'visible',
        exit: 'exit',
        variants: {
            hidden: { scale: 0, opacity: 0, x, y },
            visible: { scale: 1, opacity: 1, x: 0, y: 0 },
            exit: { scale: 0, opacity: 0, x, y },
        },
        transition: { duration: 0.3 },
    };
};

/**
 * Get the animation props for the modal. To be used with the `motion.div` component.
 *
 * @param animatePresence - The animation type to use.
 * @returns The animation props.
 */
export const getModalAnimationProps = (
    animatePresence: ModalAnimationType,
    clickEvent?: any
) => {
    if (animatePresence === MODAL_MOTION_VARIANT_TYPES_ENUM.EMANATE) {
        if (
            typeof clickEvent?.clientX === 'number' &&
            typeof clickEvent?.clientY === 'number'
        ) {
            return getEmanateModalAnimationProps(
                clickEvent.clientX,
                clickEvent.clientY
            );
        }
        return {};
    }
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

/**
 * Get whether the modal should render or not.
 *
 * @param paramisOpen - The modal's open state.
 * @param animatePresence - The animation type to use.
 * @param clickEvent - The click event.
 * @returns Whether the modal should render or not.
 */
export const getShouldRender = ({
    isOpen,
    animatePresence,
    clickEvent,
}: {
    isOpen: boolean;
    animatePresence: ModalAnimationType;
    clickEvent?: any;
}) => {
    if (!isOpen) {
        return false;
    }
    if (animatePresence === MODAL_MOTION_VARIANT_TYPES_ENUM.EMANATE) {
        return (
            typeof clickEvent?.clientX === 'number' &&
            typeof clickEvent?.clientY === 'number'
        );
    }

    return true;
};
