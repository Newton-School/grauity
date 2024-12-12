import React from 'react';

import { StyledDivProps } from '../../../../common/types';

export interface MonthlyCalendarProps extends StyledDivProps {}

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

export interface MoreCalendarEventsProps extends StyledDivProps {
    text: string;
}

export interface OverflowIndicatorProps {
    text: string;
}
