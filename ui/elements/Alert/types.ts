import React from 'react';

import { grauityIconName } from '../../core';
import { ButtonProps } from '../Button';

export type AlertType = 'default' | 'outlined' | 'filled';

export type AlertVariant =
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'default';

export interface AlertProps {
    /**
     * Type of the alert
     *
     * Available choices: `'default'`, `'outlined'`, `'filled'`
     *
     * Default: `'default'`
     * */
    type?: AlertType;

    /**
     * Variant of the alert
     *
     * Available choices: `'primary'`, `'secondary'`, `'tertiary'`, `'success'`, `'error'`, `'warning'`
     *
     * Default: `'primary'`
     * */
    variant?: AlertVariant;

    /**
     * Alert icon, used to override the default icons used in the alert
     *
     * Use value `auto` to automatically select the icon based on the variant (error vs checkmark icon)
     *
     * Default: `null`
     * */
    icon?: grauityIconName | 'auto' | null;

    /**
     * Alert title
     *
     * Default: `''`
     * */
    title?: React.ReactNode;

    /**
     * Alert description
     *
     * Default: `''`
     * */
    description?: React.ReactNode;
    /**
     * Alert top position, useful for fixed positioning
     *
     * Default: `null`
     * */
    top?: string;

    /**
     * Alert bottom position, useful for fixed positioning
     *
     * Default: `null`
     * */
    bottom?: string;

    /**
     * Alert left position, useful for fixed positioning
     *
     * Default: `null`
     * */
    left?: string;

    /**
     * Alert right position, useful for fixed positioning
     *
     * Default: `null`
     * */
    right?: string;

    /**
     * Alert position, useful for fixed positioning
     *
     * Default: `'static'`
     * */
    position?: 'static' | 'fixed' | 'absolute' | 'relative';

    /**
     * Alert close button click handler
     * */
    onClose?: () => void;

    /**
     * Show close button
     *
     * Default: `false`
     * */
    showCloseButton?: boolean;

    /**
     * Alert action buttons.
     *
     * Type: ButtonProps[]
     * */
    actionButtons?: ButtonProps[];

    /**
     * Show action buttons inline
     *
     * Default: `false`
     * */
    inlineButtons?: boolean;

    /**
     * Maximum width of the alert
     *
     * Default: `'440px'`
     * */
    maxWidth?: string;

    /**
     * Additional class name for the alert container
     * @default ''
     */
    className?: string;
}

export interface AlertContainerProps {
    $position: string;
    $top: string;
    $bottom: string;
    $left: string;
    $right: string;
    $backgroundColor: string;
    $borderColor: string;
    ref: React.Ref<HTMLDivElement>;
    role: string;
    children: React.ReactNode;
    $maxWidth: string;
}

export interface AlertBodyProps {
    $inlineButtons: boolean;
    children: React.ReactNode;
}

export interface AlertTitleProps {
    $textColor: string;
    children: React.ReactNode;
    id: string;
}

export interface AlertDescriptionProps {
    $textColor: string;
    children: React.ReactNode;
    id?: string;
}
