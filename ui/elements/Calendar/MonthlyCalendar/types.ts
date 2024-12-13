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

export interface OverflowIndicatorProps {
    text: string;
    events: MonthlyCalendarEvent[];
}

export interface GridContainerRows
    extends React.HTMLAttributes<HTMLDivElement> {
    rows: number;
}
export interface MonthlyCalendarGridItemProps {
    cellDate: Date;
    monthOffset: number;
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
