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

    /**
     * If true, the form row will be rendered as a column.
     * @default false
     */
    column?: boolean;

    /**
     * The width of the form row.
     * @default '100%'
     */
    width?: string;
}

export interface StyledFormRowProps extends StyledDivProps {
    $gridTemplateColumns: string;
    $column: boolean;
    $width: string;
}
