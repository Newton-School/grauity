import React from 'react';

import { StyledDivProps } from '../../../../common/types';
import { CalendarEvent, CalendarEventRequiredProps } from '../types';

export interface MonthlyCalendarProps<T = {}> {
    /**
     * Array of events to display in the calendar.
     */
    events: CalendarEvent<T>[];

    /**
     * Function to render each event in the calendar.
     * @param item - The event item to render
     */
    eventRenderer: (item: CalendarEvent<T>) => React.ReactNode;

    /**
     * Optional alternative render function for events.
     * @param item - The event item to render
     * @default null
     */
    renderDayItem?: (item: CalendarEvent<T>) => React.ReactNode;

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
     * The date to show in the calendar.
     *
     * @default new Date()
     */
    date?: Date;

    /**
     * A callback function that is called when the date changes.
     *
     * @param date - The new date.
     */
    onDateChange?: (date: Date) => void;

    /**
     * Whether the calendar is in a loading state.
     * @default false
     */
    loading?: boolean;

    /**
     * Callback to run when events list popover closes
     * @default () => {}
     */
    onPopOverClose?: () => void;

    /**
     * Additional class name for the calendar container
     * @default ''
     */
    className?: string;
}

export interface DateCircleProps {
    date: Date;
    backgroundColor?: string;
    textColor?: string;
}

export interface StyledDateCircleProps extends StyledDivProps {
    $isInActiveMonth?: boolean;
    $isToday?: boolean;
    $backgroundColor?: string;
}

export interface StyledDateTextProps
    extends React.HTMLAttributes<HTMLSpanElement> {
    $isToday?: boolean;
    $textColor?: string;
}

export interface OverflowIndicatorProps<T extends CalendarEventRequiredProps> {
    text: string;
    events: CalendarEvent<T>[];
    eventRenderer: (item: CalendarEvent<T>) => React.ReactNode;
    triggerRef: React.RefObject<HTMLDivElement>;
    onPopOverClose?: () => void;
}

export interface GridContainerRows
    extends React.HTMLAttributes<HTMLDivElement> {
    $rows: number;
}
export interface MonthlyCalendarGridItemProps<T> {
    cellDate: Date;
    monthOffset: number;
    events: CalendarEvent<T>[];
    eventRenderer: (item: CalendarEvent<T>) => React.ReactNode;
    renderDayItem?: (item: CalendarEvent<T>) => React.ReactNode;
    onPopOverClose?: () => void;
}

export interface StyledMonthlyCalendarGridItemProps extends StyledDivProps {
    $backgroundColor?: string;
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
    events: CalendarEvent<T>[];
    eventRenderer: (item: CalendarEvent<T>) => React.ReactNode;
    onPopOverClose?: () => void;
}

export interface StyledOverflowEventsListContainerProps extends StyledDivProps {
    $width: number;
}
