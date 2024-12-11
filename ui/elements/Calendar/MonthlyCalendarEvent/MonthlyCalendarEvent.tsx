import React, { forwardRef } from 'react';

import { get12HourFormatFromDate } from '../utils';
import { StyledMonthlyCalendarEvent, StyledMonthlyCalendarEventText,StyledMonthlyCalendarEventTitleText } from './MonthlyCalendar.styles';
import { MonthlyCalendarEventProps } from './types';

const MonthlyCalendarEvent = forwardRef<HTMLDivElement, MonthlyCalendarEventProps>(
    (props, ref) => {
        const { eventTime, eventTitle, eventTitleColor, eventTimeColor } = props;
        const eventTimeString = get12HourFormatFromDate(eventTime);

        return (
            <StyledMonthlyCalendarEvent {...props} ref={ref}>
                <StyledMonthlyCalendarEventText color={eventTimeColor} fontWeight="500">{eventTimeString}</StyledMonthlyCalendarEventText>
                <StyledMonthlyCalendarEventTitleText color={eventTitleColor} fontWeight="600">{eventTitle}</StyledMonthlyCalendarEventTitleText>
            </StyledMonthlyCalendarEvent>
        );
    },
);

export default MonthlyCalendarEvent;