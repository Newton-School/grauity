import React from 'react';
import { grauityIconSizeName } from 'ui/core';

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
     * @default var(--bg-subtle-secondary-default, #f6f7f9)
     */
    headerBackgroundColor?: string;

    /**
     * Background color of the accordion content.
     * @default var(--bg-subtle-secondary-default, #f6f7f9)
     */
    contentBackgroundColor?: string;

    /**
     * Color of the accordion toggle icon.
     * @default var(--text-emphasis-primary-default, #16191d)
     */
    iconColor?: string;

    /**
     * Size of the accordion toggle icon.
     * @default '16'
     */
    iconSize?: grauityIconSizeName;

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
     * @default: {}
     */
    style?: React.CSSProperties;

    /**
     * Additional class names to be applied for the accordion wrapper.
     * to be used for styling by styled-components.
     * @default: ''
     */
    className?: string;

    /**
     * Prop to show/hide seperator between the accordion
     * @default true
     */
    showSeparator?: boolean;
}

export interface StyledAccordionHeaderProps extends StyledDivProps {
    onClick: () => void;
    $headerBackgroundColor: string;
}

export interface StyledAccordionContentProps extends StyledDivProps {
    $contentBackgroundColor: string;
}
