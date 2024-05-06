import React from 'react';
import { grauityIconName } from '../../core';

export type ButtonVariants =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'primary-outlined'
    | 'secondary-outlined'
    | 'tertiary-outlined'
    | 'success-outlined'
    | 'danger-outlined'
    | 'warning-outlined';

export type ButtonSizes = 'small' | 'medium' | 'large' | 'extra-large';

export type ButtonIconPositions = 'left' | 'right';

export interface ButtonProps {
    /**
     * Variant of the button
     *
     * Available choices: `primary`, `secondary`, `tertiary`, `success`, `danger`, `warning`, `primary-outlined`, `secondary-outlined`, `tertiary-outlined`, `success-outlined`, `danger-outlined`, `warning-outlined`
     *
     * Default: `primary`
     * */
    variant?: ButtonVariants;

    /**
     * Size of the button
     * Available choices: `small`, `medium`, `large`
     *
     * Default: `medium`
     * */
    size?: ButtonSizes;

    /**
     * Text to be displayed in the button.
     * */
    text: string;

    /**
     * Show that the button has an icon
     *
     * Default: `false`
     * */
    hasIcon?: boolean;

    /**
     * Icon to be displayed in the button.
     * */
    icon?: grauityIconName;

    /**
     * Position of the icon
     *
     * Available choices: `left`, `right`
     *
     * Default: `left`
     * */
    iconPositon?: ButtonIconPositions;

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
     * URL to navigate to
     *
     * If provided, the button will be rendered as an anchor tag
     * */
    to?: string;

    /**
     *  Target of the anchor tag (if `to` is provided)
     *
     * Available choices: `_blank`, `_self`, `_parent`, `_top`
     *
     * Default: `_self`
     * */
    target?: string;

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
}
