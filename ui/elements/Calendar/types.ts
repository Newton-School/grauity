import React from 'react';

export type EventRendererFn<T> = (event: CalendarEvent<T>) => React.ReactNode;

export interface CalendarEvent<T = {}> {
    title?: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    render?: EventRendererFn<T>;
    focused?: boolean;
}

export type CalendarEventRecord<T> = Record<number, CalendarEvent<T>[]>;

export type CalendarEventExtended<T> = CalendarEvent<T> & {
    overlap: number;
    index: number;
    forcedEventData?: {
        start: Date;
        end: Date;
    };
};

export type CalendarEventRecordExtended<T> = Record<
    number,
    CalendarEventExtended<T>[]
>;

export interface WeeklyCalendarProps<T = {}> {
    /**
     * An optional array of calendar events.
     * @default []
     */
    events?: CalendarEvent<T>[];

    /**
     * A function to render each event.
     */
    eventRenderer?: EventRendererFn<T>;

    /**
     * A component to render in the header of the calendar.
     * @default null
     */
    header?: React.ReactNode;

    /**
     * A boolean indicating whether to show week controls.
     * @default true
     */
    shouldShowWeekControls?: boolean;

    /**
     * The offset for the week relative to current week, where 0 represents the current week.
     * @default 0
     */
    weekOffset?: number;

    /**
     * A callback function that is called when the week changes.
     * @param weekOffset - The new week offset.
     */
    onWeekChange?: (weekOffset: number) => void;

    /**
     * A boolean indicating whether to show the placeholder for loading state.
     * @default false
     */
    loading?: boolean;
}

export interface EventRendererProps<T = {}> {
    event?: CalendarEvent;
    eventRenderer?: EventRendererFn<T>;
}

export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
    'data-testid'?: string;
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
    $widthFactor: number;
    $indexFactor: number;
    $focused?: boolean;
}
