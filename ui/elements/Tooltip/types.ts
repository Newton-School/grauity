import React, { ReactNode } from 'react';

import { StyledDivProps } from '../../../common/types';
import { TOOLTIP_PLACEMENT } from './constants';

export interface TooltipConfig {
    tooltip?: {
        maxWidth?: string;
        padding?: string;
        backgroundColor?: string;
    };
}

export type TooltipChildren = ReactNode;

export type TooltipPlacement = `${TOOLTIP_PLACEMENT}`;

export interface TooltipProps {
    /**
     * The placement of the tooltip
     * @default 'top'
     * */
    placement?: TooltipPlacement;

    /**
     * Whether the tooltip should use fixed positioning
     * @default false
     * */
    fixedPositioning?: boolean;

    /**
     * The content of the tooltip
     * */
    content?: React.ReactNode;

    /**
     * Configuration for the tooltip
     *
     * @default
     * { tooltip: { maxWidth: null, padding: '12px' } }
     * */
    config?: TooltipConfig;

    /**
     * Whether the tooltip should be hidden
     * @default false
     * */
    hidden?: boolean;

    /**
     * Whether the tooltip arrow should be hidden
     * @default false
     * */
    hideArrow?: boolean;

    /**
     * A trigger to recompute the tooltip position
     * */
    recomputedTrigger?: any;

    /**
     * Whether the tooltip should be open by default
     * @default false
     * */
    defaultOpen?: boolean;

    /**
     * The children that the tooltip is wrapping
     * */
    children: TooltipChildren;
}

export interface StyledTooltipProps extends StyledDivProps {
    /**
     * The padding of the tooltip
     * @default '12px'
     * */
    padding?: string;
}
