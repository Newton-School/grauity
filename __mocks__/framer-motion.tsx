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

// `m` is the lightweight, lazy-feature variant of `motion` (used with
// LazyMotion). For tests it behaves identically to `motion`.
export const m = motion;

// LazyMotion is a feature-provider; in tests it just renders its children.
// Accepts and ignores the framer props callers pass (e.g. `features`, `strict`)
// via an index signature so they don't need to be enumerated as named props.
export const LazyMotion = ({
    children,
}: {
    children?: React.ReactNode;
    [key: string]: unknown;
}) => <>{children}</>;

// Feature bundles passed to <LazyMotion features={...}> — inert in tests.
export const domAnimation = {};
export const domMax = {};

export const AnimatePresence: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => <>{children}</>;

export const useAnimate = () => [jest.fn(), jest.fn()];
export const animate = jest.fn();
export const motionValue = jest.fn();
export const useMotionValue = jest.fn();
export const useTransform = jest.fn();
