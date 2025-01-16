import React from 'react';

import { StyledLabelProps } from '../../../common/types';
import { grauityIconSizeName } from '../../core/sizes/sizeTypes';

export interface LabelProps extends StyledLabelProps {
    name: string;
    children: React.ReactNode;
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
     * @default '22'
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
     * @default '22'
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
