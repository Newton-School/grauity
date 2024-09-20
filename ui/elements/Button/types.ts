import React from 'react';

import { grauityIconName, grauityIconSizeName } from '../../core';

export type ButtonTypeAttribute = 'button' | 'submit' | 'reset';

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
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export interface IconButtonProps {
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
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export interface ButtonComponentProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants;
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
    animateOnPress?: boolean;
    ariaLabel?: string;
    title?: string;
    tabIndex?: number;
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonContentProps {
    id?: string;
    children: React.ReactNode;
}

export interface ButtonGroupProps {
    children: React.ReactNode;
}
