import React from 'react';

import { StyledButtonProps } from '../../../common/types';
import { grauityIconName, grauityIconSizeName } from '../../core';
import {
    BUTTON_COLORS_ENUM,
    BUTTON_ICON_POSITIONS_ENUM,
    BUTTON_SIZES_ENUM,
    BUTTON_VARIANTS_ENUM,
} from './constants';

export type ButtonTypeAttribute = 'button' | 'submit' | 'reset';

export type ButtonVariants = `${BUTTON_VARIANTS_ENUM}`;

export type ButtonColors = `${BUTTON_COLORS_ENUM}`;

export type ButtonSizes = `${BUTTON_SIZES_ENUM}`;

export type ButtonIconPositions = `${BUTTON_ICON_POSITIONS_ENUM}`;

export interface ButtonProps extends StyledButtonProps {
    /**
     * Variant of the button
     *
     * Available choices: `primary` (solid), `secondary` (outlined), `tertiary` (text), `link` (text link)
     *
     * Default: `primary`
     * */
    variant?: ButtonVariants;

    /**
     * Color of the button
     *
     * Available choices: `brand` (blue), `neutral` (black), `error` (red), `success` (green), `warning` (orange)
     *
     * Default: `brand`
     * */
    color?: ButtonColors;

    /**
     * Size of the button
     * Available choices: `small`, `medium`, `large`
     *
     * Default: `medium`
     * */
    size?: ButtonSizes;

    /**
     * Icon to be displayed in the button.
     *
     * For `variant="link"`, this acts as a fallback only when `leftIcon` and `rightIcon` are both not provided.
     * */
    icon?: grauityIconName;

    /**
     * Icon to be displayed on the left side of a link button.
     *
     * Applicable for `variant="link"`.
     * */
    leftIcon?: grauityIconName | null;

    /**
     * Icon to be displayed on the right side of a link button.
     *
     * Applicable for `variant="link"`.
     * */
    rightIcon?: grauityIconName | null;

    /**
     * Size of the icon, defaults to `20`
     * */
    iconSize?: grauityIconSizeName;

    /**
     * Position of the icon
     *
     * Available choices: `left`, `right`
     *
     * Default: `left`
     * */
    iconPosition?: ButtonIconPositions;

    /**
     * Additional classes to be added to the component.
     * */
    className?: string;

    /**
     * Show that the button is inactive
     *
     * Default: `false`
     * */
    disabled?: boolean;

    /**
     * Show that the button is loading
     *
     * Ignored for `variant="link"`.
     *
     * Default: `false`
     * */
    loading?: boolean;

    /**
     * Additional styles to be used over the element
     *
     * Default: `{}`
     * */
    style?: React.CSSProperties;

    /**
     * Make the button full width
     *
     * Default: `false`
     * */
    fullWidth?: boolean;

    /**
     * Children of the component
     * */
    children?: React.ReactNode;

    /**
     * Type of the button
     *
     * Default: `button`
     * */
    type?: 'button' | 'submit' | 'reset';

    /**
     * Aria label for the button
     * */
    ariaLabel?: string;

    /**
     * Tooltip to be displayed on hover, uses the `title` attribute
     * */
    tooltip?: string;

    /**
     * Tab index of the button
     * */
    tabIndex?: number;

    /**
     * Function to be called on mouse enter
     * */
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Function to be called on mouse leave
     * */
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Additional props to be passed to the button element
     * */
    buttonProps?: StyledButtonProps;

    /**
     * Show button animation on click.
     *
     * Default: `true` (scales to 95% of its size on click)
     * */
    showAnimationOnClick?: boolean;
}

export interface IconButtonProps {
    /**
     * Variant of the button
     *
     * Available choices: `primary` (solid filled), `secondary` (outlined), `tertiary (text)`
     *
     * Default: `primary`
     * */
    variant?: ButtonVariants;

    /**
     * Color of the button
     *
     * Available choices: `brand` (blue), `neutral` (black), `error` (red), `success` (green), `warning` (orange)
     *
     * Default: `brand`
     * */
    color?: ButtonColors;

    /**
     * Size of the button
     * Available choices: `small`, `medium`, `large`
     *
     * Default: `medium`
     * */
    size?: ButtonSizes;

    /**
     * Icon to be displayed in the button.
     * */
    icon?: grauityIconName;

    /**
     * Size of the icon
     * */
    iconSize?: grauityIconSizeName;

    /**
     * Additional classes to be added to the component.
     * */
    className?: string;

    /**
     * Show that the button is inactive
     *
     * Default: `false`
     * */
    disabled?: boolean;

    /**
     * Show that the button is loading
     *
     * Default: `false`
     * */
    loading?: boolean;

    /**
     * Function to be called on click
     *
     * If the button is disabled, the function will not be called
     * */
    onClick?: (e?: any) => void;

    /**
     * Additional styles to be used over the element
     *
     * Default: `{}`
     * */
    style?: React.CSSProperties;

    /**
     * Make the button full width
     *
     * Default: `false`
     * */
    fullWidth?: boolean;

    /**
     * Type of the button
     *
     * Default: `button`
     * */
    type?: 'button' | 'submit' | 'reset';

    /**
     * Aria label for the button
     * */
    ariaLabel?: string;

    /**
     * Tooltip to be displayed on hover, uses the `title` attribute
     * */
    tooltip?: string;

    /**
     * Tab index of the button
     * */
    tabIndex?: number;

    /**
     * Function to be called on mouse enter
     * */
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Function to be called on mouse leave
     * */
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Additional props to be passed to the button element
     * */
    buttonProps?: StyledButtonProps;

    /**
     * Show button animation on click.
     *
     * Default: `true` (scales to 95% of its size on click)
     * */
    showAnimationOnClick?: boolean;
}

export interface ButtonComponentProps extends StyledButtonProps {
    variant?: ButtonVariants;
    $color?: ButtonColors;
    size?: ButtonSizes;
    icon?: string | number;
    iconSize?: string;
    iconPosition?: 'left' | 'right';
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    style?: React.CSSProperties;
    onClick?: (e?: any) => void;
    fullWidth?: boolean;
    isIconButton?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
    type?: ButtonTypeAttribute;
    ariaLabel?: string;
    title?: string;
    tabIndex?: number;
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    $showAnimationOnClick?: boolean;
}

export interface ButtonContentProps {
    id?: string;
    children: React.ReactNode;
    $variant: ButtonVariants;
    $size: ButtonSizes;
    $iconPosition: ButtonIconPositions | false;
}

export interface ButtonGroupProps {
    children: React.ReactNode;
}
