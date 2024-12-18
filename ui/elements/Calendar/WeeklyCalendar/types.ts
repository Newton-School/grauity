import React from 'react';

import { StyledDivProps } from '../../../../common/types';
import { CalendarEvent, EventRendererFn } from '../types';

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

    /**
     * The time in hours (24 hour format) to show at top initially.
     * @default 8.5 (8:30 AM)
     */
    defaultScrollHour?: number;

    /**
     * A boolean indicating whether to scroll to the first event initially.
     * @default true
     */
    shouldScrollToFirstEvent?: boolean;
}

export interface EventRendererProps<T = {}> {
    event?: CalendarEvent;
    eventRenderer?: EventRendererFn<T>;
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
