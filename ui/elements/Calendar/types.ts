import React from 'react';

export type EventRendererFn<T> = (event: CalendarEvent<T>) => React.ReactNode;

export interface CalendarEvent<T = {}> {
    start: Date;
    end: Date;
    allDay?: boolean;
    render?: EventRendererFn<T>;
}

export type CalendarEventRecord<T> = Record<number, CalendarEvent<T>[]>;

export interface WeeklyCalendarProps<T = {}> {
    events?: CalendarEvent<T>[];
    eventRenderer?: EventRendererFn<T>;
    shouldShowWeekControls?: boolean;
    weekOffset?: number;
    onWeekChange?: (weekOffset: number) => void;
}

export interface EventRendererProps<T = {}> {
    event?: CalendarEvent;
    eventRenderer?: EventRendererFn<T>;
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
