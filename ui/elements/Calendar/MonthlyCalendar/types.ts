import React from 'react';

import { StyledDivProps } from '../../../../common/types';

export interface MonthlyCalendarProps<T> extends StyledDivProps {
    monthOffset: number;
    data: T[];
    renderItem: (item: T) => React.ReactNode;
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
