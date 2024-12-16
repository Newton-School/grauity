import React from 'react';

import { StyledDivProps } from '../../../../common/types';

export interface MonthlyCalendarProps<T> extends StyledDivProps {
    events: T[];
    eventRenderer: (item: T) => React.ReactNode;
    shouldShowMonthControls?: boolean;
    header?: React.ReactNode;
    monthOffset: number;
    onMonthChange?: (monthOffset: number) => void;
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
