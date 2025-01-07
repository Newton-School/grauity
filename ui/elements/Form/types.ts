import React from 'react';

import { StyledLabelProps } from '../../../common/types';

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
}
