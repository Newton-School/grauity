import React from 'react';

import { StyledDivProps } from '../../../../common/types';

export interface FormRowProps {
    /**
     * Children to be rendered in the form row.
     */
    children: React.ReactNode;

    /**
     * Widths of the form row children in fractions. By default, all children will have equal width.
     * @default 'equal'
     * @example '2fr 1fr'
     */
    widths?: string;
}

export interface StyledFormRowProps extends StyledDivProps {
    $gridTemplateColumns: string;
}
