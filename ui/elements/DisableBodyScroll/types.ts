import React from 'react';

import { StyledDivProps } from '../Calendar/types';

export interface DisableBodyScrollProps {
    children?: React.ReactNode;
    enabled?: boolean;
}

export interface StyledDisableBodyScrollProps extends StyledDivProps {
    $enabled: boolean;
}
