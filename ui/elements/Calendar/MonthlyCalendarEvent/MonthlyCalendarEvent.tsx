import React, { forwardRef } from 'react';

import { get12HourFormatFromDate } from '../utils';
import {
    StyledMonthlyCalendarEvent,
    StyledMonthlyCalendarEventText,
    StyledMonthlyCalendarEventTitleText,
} from './MonthlyCalendar.styles';
import { MonthlyCalendarEventProps } from './types';

const MonthlyCalendarEvent = forwardRef<
    HTMLDivElement,
    MonthlyCalendarEventProps
>(
    (
        {
            eventTime,
            eventTitle,
            eventTitleColor,
            eventTimeColor,
            borderRadius,
            backgroundColor,
            width,
            height,
            isActive,
            ...props
        },
        ref
    ) => {
        const eventTimeString = get12HourFormatFromDate(eventTime);

        return (
            <StyledMonthlyCalendarEvent
                $borderRadius={borderRadius}
                $backgroundColor={backgroundColor}
                $width={width}
                $height={height}
                $isActive={isActive}
                {...props}
                ref={ref}
            >
                <StyledMonthlyCalendarEventText $color={eventTimeColor}>
                    {eventTimeString}
                </StyledMonthlyCalendarEventText>
                <StyledMonthlyCalendarEventTitleText $color={eventTitleColor}>
                    {eventTitle}
                </StyledMonthlyCalendarEventTitleText>
            </StyledMonthlyCalendarEvent>
        );
    }
);

export default MonthlyCalendarEvent;
