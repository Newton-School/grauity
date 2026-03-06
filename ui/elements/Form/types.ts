import React from 'react';
import { TEXT_COLORS } from 'ui/core';

import { grauityIconSizeName } from '../../core/sizes/sizeTypes';

export type FormTextColors = `${TEXT_COLORS}`;

export interface LabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /**
     * The name of the label. Required for use with form elements' `htmlFor` attribute.
     */
    name: string;

    /**
     * The color of the label. Defaults to 'secondary'.
     */
    color?: FormTextColors;

    /**
     * The content of the label.
     */
    children: React.ReactNode;

    /**
     * Whether the label should show required marker.
     * @default false
     */
    isRequired?: boolean;

    /**
     * Whether the label is disabled.
     * @default false
     */
    isDisabled?: boolean;
}

export interface StyledLabelComponentProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    $isRequired?: boolean;
    $isDisabled?: boolean;
    $color?: FormTextColors;
}

export interface HelpMessageProps {
    /**
     * The content of the HelpMessage.
     * @type React.ReactNode
     */

    children: React.ReactNode;

    /**
     * The current length of the input value.s
     * @type number
     */
    currentLength?: number;

    /**
     * The maximum length of the input value.
     * @type number
     */
    maxLength?: number;
}

export interface ErrorMessageProps {
    /**
     * The content of the ErrorMessage.
     * @type React.ReactNode
     */
    children: React.ReactNode;

    /**
     * The size of the icon.
     * @type grauityIconSizeName
     * @default '20'
     */
    iconSize?: grauityIconSizeName;

    /**
     * Additional styles to be used over the element.
     * @type React.CSSProperties
     */
    style?: React.CSSProperties;
}

export interface SuccessMessageProps {
    /**
     * The content of the ErrorMessage.
     * @type React.ReactNode
     */
    children: React.ReactNode;

    /**
     * The size of the icon.
     * @type grauityIconSizeName
     * @default '20'
     */
    iconSize?: grauityIconSizeName;

    /**
     * Additional styles to be used over the element.
     * @type React.CSSProperties
     */
    style?: React.CSSProperties;
}

export interface GenericMessageProps {
    /**
     * Additional CSS properties to be applied for message text.
     * default: {}
     */
    style?: React.CSSProperties;

    /**
     * The content of the ErrorMessage.
     * @type React.ReactNode
     */
    children: React.ReactNode;
}
