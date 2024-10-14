import React from 'react';

import { StyledDivProps } from '../../../common/types';

export interface AccordionProps {
    /**
     * Title of the accordion.
     */
    title: React.ReactNode;

    /**
     * Flag to determine if the accordion is expanded.
     * @default false
     */
    expanded?: boolean;

    /**
     * Callback function to handle toggle events.
     * @param expanded - The new expanded state of the accordion.
     */
    onToggle?: (expanded: boolean) => void;

    /**
     * Content to be displayed inside the accordion.
     */
    children?: React.ReactNode;
}

export interface StyledAccordionHeaderProps extends StyledDivProps {
    onClick: () => void;
}
