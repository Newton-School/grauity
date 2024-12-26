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
     * Background color of the accordion header.
     * @default var(--bg-secondary, #F6F7F9)
     */
    headerBackgroundColor?: string;

    /**
     * Background color of the accordion content.
     * @default var(--bg-secondary, #F6F7F9)
     */
    contentBackgroundColor?: string;

    /**
     * Color of the accordion toogle icon.
     * @default var(--text-primary, #16191D)
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

    /**
     * Additional CSS properties to be applied for the accordion wrapper.
     * default: {}
     */
    style?: React.CSSProperties;
}

export interface StyledAccordionHeaderProps extends StyledDivProps {
    onClick: () => void;
    $headerBackgroundColor: string;
}

export interface StyledAccordionContentProps extends StyledDivProps {
    $contentBackgroundColor: string;
}
