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
     * Suffix element to be displayed before toggle icon.
     */
    suffix?: React.ReactNode;

    /**
     * Color of the accordion header tile.
     * @default var(--bg-secondary)
     */
    tileColor?: string;

    /**
     * Color of the accordion header content.
     * @default var(--text-secondary)
     */
    contentColor?: string;

    /**
     * Color of the accordion header icon.
     * @default var(--text-primary)
     */
    iconColor?: string;

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
    $tileColor: string;
}

export interface StyledAccordionContentProps extends StyledDivProps {
    $contentColor: string;
}
