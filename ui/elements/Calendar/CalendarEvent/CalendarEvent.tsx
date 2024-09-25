import React, { forwardRef } from 'react';
import Chip from 'ui/elements/Chip';

import { get12HourFormatFromDate, getDurationInMilliseconds } from '../utils';
import {
    StyledCalendarEventTitleRow,
    StyledCalendarEventWrapper,
} from './CalendarEvent.styles';
import { CalendarEventProps } from './types';

const CalendarEvent = forwardRef<HTMLDivElement, CalendarEventProps>(
    (props, ref) => {
        const {
            title,
            chipContent,
            start,
            end,
            minDurationToDisplayTime = 1 * 60 * 60 * 1000,
            textColor,
            backgroundColor,
            borderColor,
            chipTextColor,
            chipBackgroundColor,
        } = props;

        return (
            <StyledCalendarEventWrapper
                ref={ref}
                $textColor={textColor}
                $backgroundColor={backgroundColor}
                $borderColor={borderColor}
                tabIndex={0}
            >
                <StyledCalendarEventTitleRow>
                    <span>{title}</span>
                    {typeof chipContent === 'string' &&
                        chipContent.length > 0 && (
                            <Chip
                                size="medium"
                                backgroundColor={
                                    chipBackgroundColor ||
                                    'var(--color-brand-600, #005ED1);'
                                }
                                textColor={
                                    chipTextColor ||
                                    'var(--text-action2, #fff);'
                                }
                            >
                                {chipContent}
                            </Chip>
                        )}
                </StyledCalendarEventTitleRow>
                {getDurationInMilliseconds(start, end) >=
                    minDurationToDisplayTime && (
                    <span>
                        {get12HourFormatFromDate(start)} -{' '}
                        {get12HourFormatFromDate(end)}
                    </span>
                )}
            </StyledCalendarEventWrapper>
        );
    }
);

export default CalendarEvent;
