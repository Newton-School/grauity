import React from 'react';
import { grauityIconName, grauityIconSizeName } from '../../core';
import { BUTTON_SIZES_ENUM, BUTTON_VARIANTS_ENUM } from './constants';

interface StyledButtonProps {
    variant?: BUTTON_VARIANTS_ENUM;
    size?: BUTTON_SIZES_ENUM;
    icon?: string | number;
    iconSize?: string;
    iconPositon?: 'left' | 'right';
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    style?: React.CSSProperties;
    onClick?: (e?: any) => void;
    fullWidth?: boolean;
    isIconButton?: boolean;
    children?: React.ReactNode;
}

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
     * Icon to be displayed in the button.
     * */
    icon?: grauityIconName;

    /**
     * Size of the icon
     * */
    iconSize?: grauityIconSizeName;

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
     * Children of the component
     * */
    children?: any;

    /**
     * Determines if the button is an icon button, it will be then fully rounded
     * */
    isIconButton?: boolean;
}

export interface ButtonComponentProps {
    variant?: ButtonVariants;
    size?: ButtonSizes;
    icon?: string | number;
    iconSize?: string;
    iconPositon?: 'left' | 'right';
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    style?: React.CSSProperties;
    onClick?: (e?: any) => void;
    fullWidth?: boolean;
    isIconButton?: boolean;
    children?: React.ReactNode;
}
