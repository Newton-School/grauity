import React from 'react';

import { CalendarEvent, CalendarView } from '../types';

export interface UnifiedCalendarProps<T> {
    /**
     * Calendar view to display. Only supports monthly and weekly
     * @default weekly
     */
    view?: CalendarView;

    /**
     * Calendar view callback when viewtype changes
     */
    onViewChange?: (viewType: CalendarView) => void;

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
     * Whether to show navigation controls.
     * @default true
     */
    shouldShowControls?: boolean;

    /**
     * Custom header content to display above the calendar.
     * @default null
     */
    header?: React.ReactNode;

    /**
     * The date for which the calendar should render events
     * @default new Date()
     */
    date: Date;

    /**
     * Callback fired when the date changes.
     * @param date - The new date value.
     * @default null
     */
    onDateChange?: (date: Date) => void;

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

    /**
     * Monthly calendar properties, only applicable when type is 'monthly'.
     */
    monthlyCalendarProps?: {
        /**
         * Optional alternative render function for events.
         * @param item - The event item to render
         * @default null
         */
        renderDayItem?: (
            item: CalendarEvent<T>,
            view: CalendarView
        ) => React.ReactNode;

        /**
         * Callback to run when popover closes
         * @default null
         */
        onPopOverClose?: () => void;
    };
}

export interface UnifiedCalendarHeaderProps {
    loading: boolean;
    onViewChange: (viewType: CalendarView) => void;
    date: Date;
    initialActiveTab: number;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
    label: string;
    epochDiffForDateChange: number;
}
