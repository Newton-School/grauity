import React from 'react';

import { StyledDivProps } from '../Calendar/types';

export interface OverlayProps {
    /**
     * Content to be displayed inside the Overlay.
     */
    children?: React.ReactNode;

    /**
     * Callback to be called when the overlay is clicked.
     */
    onOverlayClick?: () => void;

    /**
     * Flag to determine if the body scroll should be disabled.
     * @default true
     */
    shouldDisableScroll?: boolean;

    /**
     * Flag to determine if the overlay should be tinted
     * @default false
     */
    shouldTintOverlay?: boolean;

    /**
     * Flag to determine if the overlay should be blurred
     * @default false
     */
    shouldBlurOverlay?: boolean;

    /**
     * Color of the overlay
     * @default 'var(--alpha-overlay, rgba(22, 25, 29, 0.8))'
     */
    overlayColor?: string;

    /**
     * Flag to determine if the content should be centered
     * @default false
     */
    shouldCenterContent?: boolean;

    /**
     * Duration in seconds for the overlay animation
     */
    animationDuration?: number;
}

export interface StyledOverlayProps extends StyledDivProps {
    $shouldTintOverlay?: boolean;
    $shouldBlurOverlay?: boolean;
    $overlayColor?: string;
    $shouldCenterContent?: boolean;
}
