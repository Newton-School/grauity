import React from 'react';

export interface CalendarEventRequiredProps {
    start: Date;
    end: Date;
}

export type EventRendererFn<T> = (event: CalendarEvent<T>) => React.ReactNode;

export interface CalendarEvent<T = {}> {
    id?: string | number;
    title?: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    render?: EventRendererFn<T>;
    focused?: boolean;
}

export type CalendarView = 'monthly' | 'weekly';

export interface CalendarProps<T> {
    /**
     * Calendar view to display. Only supports monthly and weekly
     * @default weekly
     */
    view: CalendarView;

    /**
     * Calendar view callback when viewtype changes
     */
    onViewChange: (viewType: CalendarView) => void;

    /**
     * Array of events to display in the calendar.
     */
    events: CalendarEvent<T>[];

    /**
     * Function to render each event in the calendar.
     * @param item - The event item to render
     */
    eventRenderer: (
        item: CalendarEvent<T>,
        view: CalendarView
    ) => React.ReactNode;

    /**
     * Whether to show month navigation controls.
     * @default true
     */
    shouldShowControls?: boolean;

    /**
     * Custom header content to display above the calendar.
     * @default null
     */
    header?: React.ReactNode;

    /**
     * Number of months to offset from the current month.
     * Positive numbers move forward, negative numbers move backward.
     * @default 0
     */
    // monthOffset: number;
    offset: number;

    /**
     * Callback fired when the month changes.
     * @param monthOffset - The new month offset value
     * @default null
     */
    // onMonthChange?: (monthOffset: number) => void;
    onOffsetChange?: (offset: number) => void;

    /**
     * Whether the calendar is in a loading state.
     * @default false
     */
    loading?: boolean;

    /**
     * Weekly calendar properties, only applicable when type is 'weekly'.
     */
    weeklyCalendarProps?: {
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
    };

    monthtlyCalendarProps?: {
        /**
         * Optional alternative render function for events.
         * @param item - The event item to render
         * @default null
         */
        monthlyRenderDayItem?: (
            item: CalendarEvent<T>,
            view: CalendarView
        ) => React.ReactNode;
    };
}
