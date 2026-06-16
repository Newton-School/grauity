import { domAnimation, LazyMotion } from 'framer-motion';
import React from 'react';

/**
 * Wraps animated grauity components so framer-motion's lightweight `m`
 * components load only the DOM animation feature set
 * (initial / animate / exit / variants / transition) — lazily and
 * tree-shakeably — instead of eagerly bundling the full `motion` feature set.
 * grauity uses no drag / layout / pan, so `domAnimation` is the complete set.
 *
 * Must wrap ABOVE the `m` components (and any <AnimatePresence>) so the feature
 * context is available; nesting multiple instances is safe and deduplicated.
 */
const GrauityLazyMotion = ({ children }: { children?: React.ReactNode }) => (
    <LazyMotion features={domAnimation}>{children}</LazyMotion>
);

export default GrauityLazyMotion;
