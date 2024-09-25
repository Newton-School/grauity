import React from 'react';

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
export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
}

export interface StyledAccordionWrappeer extends StyledDivProps {
    expanded?: boolean;
}

export interface StyledAccordionHeaderProps
    extends React.HTMLAttributes<HTMLDivElement> {
    expanded: boolean;
    onClick: () => void;
}

export interface StyledAccordionContentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    expanded: boolean;
}

export interface StyledIconProps
    extends React.HTMLAttributes<HTMLImageElement> {
    src: string;
}
