import React from 'react';

import { StyledButtonProps } from '../../../common/types';
import { grauityIconName, grauityIconSizeName } from '../../core';
import { Theme } from '../ThemeScope/types';

export type LinkButtonSize = 'small' | 'large';

export interface LinkButtonProps extends StyledButtonProps {
    /**
     * Size of the LinkButton.
     * Available choices: `small`, `large`
     *
     * Default: `large`
     */
    size?: LinkButtonSize;

    /**
     * Icon to be displayed on the left side.
     *
     * Default: `null`
     */
    leftIcon?: grauityIconName | null;

    /**
     * Icon to be displayed on the right side.
     *
     * Default: `null`
     */
    rightIcon?: grauityIconName | null;

    /**
     * Size of icon.
     *
     * Default: `20`
     */
    iconSize?: grauityIconSizeName;

    /**
     * Additional class name for the component.
     */
    className?: string;

    /**
     * Disable the button interaction.
     *
     * Default: `false`
     */
    disabled?: boolean;

    /**
     * Additional styles to be used over the element.
     *
     * Default: `{}`
     */
    style?: React.CSSProperties;

    /**
     * Function to be called on click.
     *
     * Default: `() => {}`
     */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Make the button type.
     *
     * Default: `button`
     */
    type?: 'button' | 'submit' | 'reset';

    /**
     * Content to display in the button.
     *
     * Default: `Link`
     */
    children?: React.ReactNode;

    /**
     * Aria label for the button.
     */
    ariaLabel?: string;

    /**
     * Tooltip to be displayed on hover, uses native `title` attribute.
     */
    tooltip?: string;

    /**
     * Tab index of the button.
     *
     * Default: `0`
     */
    tabIndex?: number;

    /**
     * Function to be called on mouse enter.
     */
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Function to be called on mouse leave.
     */
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Additional props to be passed to the button element.
     */
    buttonProps?: StyledButtonProps;

    /**
     * Show click animation.
     *
     * Default: `true`
     */
    showAnimationOnClick?: boolean;
}

export interface StyledLinkButtonProps extends StyledButtonProps {
    size?: LinkButtonSize;
    $showAnimationOnClick?: boolean;
    $scopedTheme?: Theme;
}

export interface StyledLinkButtonContentProps {
    $size: LinkButtonSize;
}
