import React from 'react';

export interface CalendarEvent {
    start: Date;
    end: Date;
    allDay?: boolean;
    render?: (event: CalendarEvent) => React.ReactNode;
}

export interface WeeklyCalendarProps {
    events?: CalendarEvent[];
    shouldShowWeekControls?: boolean;
    weekOffset?: number;
    onWeekChange?: (weekOffset: number) => void;
}

export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
}

export interface StyledCalendarBlockProps extends StyledDivProps {
    $active?: boolean;
}

export interface StyledCalendarTimelineBlockProps extends StyledDivProps {
    text?: string;
}
