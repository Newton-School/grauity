/* eslint-disable no-undef */
import React from 'react';

const createMotionComponent = <T extends keyof JSX.IntrinsicElements>(
    element: T
) => {
    return React.forwardRef<HTMLElement, JSX.IntrinsicElements[T]>(
        ({ children, ...props }, ref) => {
            return React.createElement(element, { ...props, ref }, children);
        }
    );
};

export const motion = {
    div: createMotionComponent('div'),
    button: createMotionComponent('button'),
};

export const AnimatePresence: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => <>{children}</>;

export const useAnimate = () => [jest.fn(), jest.fn()];
export const animate = jest.fn();
export const motionValue = jest.fn();
export const useMotionValue = jest.fn();
export const useTransform = jest.fn();
