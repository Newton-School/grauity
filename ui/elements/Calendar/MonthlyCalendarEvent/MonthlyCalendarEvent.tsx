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
>((props, ref) => {
    const {
        eventTime,
        eventTitle,
        eventTitleColor,
        eventTimeColor,
        $backgroundColor,
        $borderRadius,
        $width,
        $height,
        $isActive,
        ...rest
    } = props as any;
    const eventTimeString = get12HourFormatFromDate(eventTime);

    return (
        <StyledMonthlyCalendarEvent
            ref={ref}
            $backgroundColor={$backgroundColor}
            $borderRadius={$borderRadius}
            $width={$width}
            $height={$height}
            $isActive={$isActive}
            {...rest}
        >
            <StyledMonthlyCalendarEventText $color={eventTimeColor}>
                {eventTimeString}
            </StyledMonthlyCalendarEventText>
            <StyledMonthlyCalendarEventTitleText $color={eventTitleColor}>
                {eventTitle}
            </StyledMonthlyCalendarEventTitleText>
        </StyledMonthlyCalendarEvent>
    );
});

export default MonthlyCalendarEvent;
