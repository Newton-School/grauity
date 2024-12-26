import React from 'react';
import { grauityIconName } from 'ui/core';

import { StyledDivProps } from '../../../common/types';

export type IconPosition = 'left' | 'right';

export interface CorouselProps {
    /**
     * An array of React nodes to be displayed as items in the carousel.
     * default: []
     */
    items?: React.ReactNode[];

    /**
     * A React node to be displayed as the title of the carousel.
     * default: null
     */
    title?: React.ReactNode;

    /**
     * The amount of pixels to scroll when the navigation icons are clicked.
     * @default 100
     */
    scrollAmount?: number;

    /**
     * The position of the navigation icons.
     * default: right
     */
    iconPosition?: IconPosition;

    /**
     * A React node to be used as the left navigation icon.
     * @default chevron-left
     */
    leftIcon?: grauityIconName;

    /**
     * A React node to be used as the right navigation icon.
     * @default chevron-right
     */
    rightIcon?: grauityIconName;

    /**
     * Callback function to be called when the left navigation icon is clicked.
     * @default null
     */
    onLeftClick?: () => void;

    /**
     * Callback function to be called when the right navigation icon is clicked.
     * @default null
     */
    onRightClick?: () => void;

    /**
     * Callback function to be called when the carousel is scrolled to the end.
     * @default null
     */
    onScrollEnd?: () => void;

    /**
     * Gap between the carousel items in pixels.
     * @default 12
     */
    gap?: number;

    /**
     * Custom styles to be applied to the carousel.
     * @default null
     */
    style?: React.CSSProperties;
}

export interface StyledCorouselHeaderRowProps extends StyledDivProps {
    $iconPosition: IconPosition;
}

export interface StyledCorouselItemsContainerProps extends StyledDivProps {
    $gap: number;
    $translateX: number;
}
