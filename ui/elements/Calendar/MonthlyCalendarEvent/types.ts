import React from 'react';

import { StyledDivProps } from '../../../../common/types';

export interface MonthlyCalendarEventProps extends StyledDivProps {
    /**
     * The background color of the calendar event.
     */
    backgroundColor?: string;

    /**
     * The border radius of the calendar event container.
     */
    borderRadius?: string;

    /**
     * The width of the calendar event container.
     */
    width?: string;

    /**
     * The height of the calendar event container.
     */
    height?: string;

    /**
     * The date and time of the calendar event.
     */
    eventTime: Date;

    /**
     * The title or description of the calendar event.
     */
    eventTitle: string;

    /**
     * The color of the event time text.
     */
    eventTimeColor?: string;

    /**
     * The color of the event title text.
     */
    eventTitleColor?: string;
}

export interface StyledMonthlyCalendarEventTextProps extends StyledDivProps {
    color?: string;
    fontWeight?: string;
}
