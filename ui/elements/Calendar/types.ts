import React from 'react';

export interface CalendarEvent {
    start: Date;
    end: Date;
    allDay?: boolean;
    render?: (event: CalendarEvent) => React.ReactNode;
}

export type CalendarEventRecord = Record<number, CalendarEvent[]>;

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
    $currentTimeStick?: number;
}

export interface StyledCalendarTimelineBlockProps extends StyledDivProps {
    $text?: string;
    $headerBlock?: boolean;
}

export interface StyledEventWrapperProps extends StyledDivProps {
    $startPosition: number;
    $height: number;
    $totalEvents: number;
    $eventIndex: number;
}
