import React from 'react';

import { StyledDivProps } from '../../../../common/types';

export interface MonthlyCalendarEventProps extends StyledDivProps {
    /**
     * The background color of the calendar event.
     * @default 'var(--bg-emphasis-brand-default, #0673f9)'
     */
    backgroundColor?: string;

    /**
     * The border radius of the calendar event container.
     * @default '4px'
     */
    borderRadius?: string;

    /**
     * The width of the calendar event container.
     * @default '100%'
     */
    width?: string;

    /**
     * The height of the calendar event container.
     * @default '100%'
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
     * @default 'var(--text-emphasis-invert-primary-default, #ffffff)'
     */
    eventTimeColor?: string;

    /**
     * The color of the event title text.
     * @default 'var(--text-emphasis-invert-primary-default, #ffffff)'
     */
    eventTitleColor?: string;

    /**
     * Whether the calendar event is active.
     * @default false
     */
    isActive?: boolean;
}

export interface StyledMonthlyCalendarEventTextProps extends StyledDivProps {
    color?: string;
    fontWeight?: string;
}
