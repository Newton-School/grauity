import React from 'react';

import { StyledDivProps } from '../Calendar/types';

export interface DisableBodyScrollProps {
    /**
     * Content to be displayed inside the DisableBodyScroll.
     */
    children?: React.ReactNode;

    /**
     * Flag to determine if the body scroll should be disabled.
     * @default true
     */
    enabled?: boolean;
}

export interface StyledDisableBodyScrollProps extends StyledDivProps {
    $enabled: boolean;
}
