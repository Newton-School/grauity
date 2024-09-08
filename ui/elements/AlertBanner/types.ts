import React from 'react';

import { grauityIconName } from '../../core';
import { ButtonProps } from '../Button';

export type AlertBannerType = 'default' | 'outlined' | 'filled';

export type AlertBannerVariant =
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'default';

export interface AlertBannerProps {
    /**
     * Type of the alert banner
     *
     * Available choices: `'default'`, `'outlined'`, `'filled'`
     *
     * Default: `'default'`
     * */
    type?: AlertBannerType;

    /**
     * Variant of the alert banner
     *
     * Available choices: `'primary'`, `'secondary'`, `'tertiary'`, `'success'`, `'danger'`, `'warning'`
     *
     * Default: `'primary'`
     * */
    variant?: AlertBannerVariant;

    /**
     * Alert banner padding
     *
     * Default: `'var(--spacing-8px, 8px)'`
     * */
    padding?: string;

    /**
     * Alert banner icon, used to override the default icons used in the alert banner
     *
     * Use value `auto` to automatically select the icon based on the variant (error vs checkmark icon)
     *
     * Default: `null`
     * */
    icon?: grauityIconName | 'auto';

    /**
     * Alert banner top position, useful for fixed positioning
     *
     * Default: `null`
     * */
    top?: string;

    /**
     * Alert banner bottom position, useful for fixed positioning
     *
     * Default: `null`
     * */
    bottom?: string;

    /**
     * Alert banner left position, useful for fixed positioning
     *
     * Default: `null`
     * */
    left?: string;

    /**
     * Alert banner right position, useful for fixed positioning
     *
     * Default: `null`
     * */
    right?: string;

    /**
     * Alert banner position, useful for fixed positioning
     *
     * Default: `'static'`
     * */
    position?: 'static' | 'fixed' | 'absolute' | 'relative';

    /**
     * Alert banner content
     * */
    children: React.ReactNode;

    /**
     * Alert banner content justify content
     *
     * Default: `'center'`
     * */
    justifyContent?: 'center' | 'space-between' | 'space-around';

    /**
     * Alert banner close button click handler
     * */
    onClose?: () => void;

    /**
     * Show close button
     *
     * Default: `false`
     * */
    showCloseButton?: boolean;

    /**
     * Alert banner action buttons.
     *
     * Type: ButtonProps[]
     * */
    actionButtons?: ButtonProps[];
}

export interface AlertBannerContainerProps {
    type: AlertBannerType;
    variant: AlertBannerVariant;
    justifyContent: string;
    padding: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
    position: string;
    textColor: string;
    backgroundColor: string;
    borderColor: string;
    children: React.ReactNode;
    ref: React.Ref<HTMLDivElement>;
    role: string;
}
