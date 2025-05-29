import React from 'react';
import { grauityIconName } from 'ui/core';

import { StyledDivProps } from '../../../common/types';
import { ButtonColors, ButtonVariants } from '../Button/types';

export type IconPosition = 'left' | 'right';

export interface CarouselProps {
    /**
     * An array of React nodes to be displayed as items in the carousel.
     * @default []
     */
    items?: React.ReactNode[];

    /**
     * A React node to be displayed as the title of the carousel.
     * @default null
     */
    title?: React.ReactNode;

    /**
     * Whether to make the items take up the full width of the container.
     * @default false
     */
    fullWidthItems?: boolean;

    /**
     * The amount of pixels to scroll when the navigation icon buttons are clicked.
     * @default 100
     */
    scrollAmount?: number;

    /**
     * Whether to hide the navigation icon buttons when there are less items than the visible area.
     * @default false
     */
    hideIconsOnLessItems?: boolean;

    /**
     * The position of the navigation icon buttons.
     * @default right
     */
    iconPosition?: IconPosition;

    /**
     * The name of left navigation icon.
     * @default chevron-left
     */
    leftIcon?: grauityIconName;

    /**
     * The name of right navigation icon.
     * @default chevron-right
     */
    rightIcon?: grauityIconName;

    /**
     * Gap between the navigation icon buttons in pixels.
     * @default 12
     */
    iconGap?: number;

    /**
     * The variant of the navigation icon buttons.
     * @default secondary
     */
    iconButtonVariant?: ButtonVariants;

    /**
     * The color of the navigation icon buttons.
     * @default neutral
     */
    iconButtonColor?: ButtonColors;

    /**
     * Callback function to be called when the left navigation button is clicked.
     * @default null
     */
    onLeftClick?: () => void;

    /**
     * Callback function to be called when the right navigation button is clicked.
     * @default null
     */
    onRightClick?: () => void;

    /**
     * Callback function to be called when the carousel is scrolled to the end.
     * @default null
     */
    onScrollEnd?: () => void;

    /**
     * Gap between the carousel header and the items row in pixels.
     * @default 12
     */
    headerGap?: number;

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

    /**
     * Custom class name to be applied to the carousel.
     * @default null
     */
    className?: string;
}

export interface StyledCarouselContainerProps extends StyledDivProps {
    $headerGap: number;
}

export interface StyledCarouselHeaderRowProps extends StyledDivProps {
    $iconPosition: IconPosition;
}

export interface StyledCarouselControlsProps extends StyledDivProps {
    $iconGap: number;
}

export interface StyledCarouselItemsContainerProps extends StyledDivProps {
    $gap: number;
    $translateX: number;
}

export interface StyledCarouselItemProps extends StyledDivProps {
    $fullWidth: boolean;
}
