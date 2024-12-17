import React from 'react';

import { StyledDivProps } from '../../../../common/types';

/**
 * Props for the MonthlyCalendar component.
 * Represents a calendar view that displays events in a monthly grid format.
 *
 * @extends StyledDivProps
 * @template T The type of event objects to be displayed
 */
export interface MonthlyCalendarProps<T> extends StyledDivProps {
    /**
     * Array of events to display in the calendar.
     */
    events: T[];

    /**
     * Function to render each event in the calendar.
     * @param item - The event item to render
     */
    eventRenderer: (item: T) => React.ReactNode;

    /**
     * Optional alternative render function for events.
     * @param item - The event item to render
     * @default null
     */
    renderItem?: (item: T) => React.ReactNode;

    /**
     * Whether to show month navigation controls.
     * @default true
     */
    shouldShowMonthControls?: boolean;

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
    monthOffset: number;

    /**
     * Callback fired when the month changes.
     * @param monthOffset - The new month offset value
     * @default null
     */
    onMonthChange?: (monthOffset: number) => void;

    /**
     * Whether the calendar is in a loading state.
     * @default false
     */
    loading?: boolean;
}

export interface DateCircleProps {
    date: Date;
    backgroundColor?: string;
    textColor?: string;
}

export interface StyledDateCircleProps extends StyledDivProps {
    isInActiveMonth?: boolean;
    isToday?: boolean;
    backgroundColor?: string;
}

export interface StyledDateTextProps
    extends React.HTMLAttributes<HTMLSpanElement> {
    isToday?: boolean;
    textColor?: string;
}

export interface MonthlyCalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
}

export interface OverflowIndicatorProps<T> {
    text: string;
    events: T[];
    eventRenderer: (item: T) => React.ReactNode;
}

export interface GridContainerRows
    extends React.HTMLAttributes<HTMLDivElement> {
    rows: number;
}
export interface MonthlyCalendarGridItemProps<T> {
    cellDate: Date;
    monthOffset: number;
    events: T[];
    eventRenderer: (item: T) => React.ReactNode;
    renderItem?: (item: T) => React.ReactNode;
}

export interface StyledMonthlyCalendarGridItemProps extends StyledDivProps {
    backgroundColor?: string;
}

export interface MonthlyCalendarLoadingProps {
    gridData: Date[];
}

export interface MonthlyControlsProps {
    loading: boolean;
    monthOffset: number;
    setMonthOffset: React.Dispatch<React.SetStateAction<number>>;
}

export interface OverflowEventsListProps<T> {
    triggerRef: React.RefObject<HTMLDivElement>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    events: T[];
    eventRenderer: (item: T) => React.ReactNode;
}
