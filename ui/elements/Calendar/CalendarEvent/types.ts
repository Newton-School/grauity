import React from 'react';

export interface CalendarEventProps {
    title: string;
    chipContent?: string;
    start: Date;
    end: Date;
    onClick?: () => void;
    focused?: boolean;
    minDurationToDisplayTime?: number;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    chipTextColor?: string;
    chipBackgroundColor?: string;
}

export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
}

export interface StyledCalendarEventWrapperProps extends StyledDivProps {
    $textColor?: string;
    $backgroundColor?: string;
    $borderColor?: string;
    $focused?: boolean;
}
