import React from 'react';

export interface AccordionProps {
    title: React.ReactNode;
    expanded?: boolean;
    onToggle?: (expanded: boolean) => void;
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
