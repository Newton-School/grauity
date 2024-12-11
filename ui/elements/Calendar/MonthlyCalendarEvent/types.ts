import React from 'react';

import { StyledDivProps } from '../../../../common/types';

export interface MonthlyCalendarEventProps extends StyledDivProps {
    ref?: React.Ref<HTMLDivElement>;
    backgroundColor?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
    eventTime: Date;
    eventTitle: string;
    eventTimeColor?: string;
    eventTitleColor?: string;
}

export interface StyledMonthlyCalendarEventTextProps extends StyledDivProps {
    color?: string;
    fontWeight?: string;
}
