/* eslint-disable indent */
import React, { forwardRef } from 'react';

import Chip from '../../Chip';
import { get12HourFormatFromDate, getDurationInMilliseconds } from '../utils';
import {
    StyledCalendarEventTitleRow,
    StyledCalendarEventWrapper,
    StyledCalendarTimeRange,
} from './CalendarEvent.styles';
import { CalendarEventProps } from './types';

const CalendarEvent = forwardRef<HTMLDivElement, CalendarEventProps>(
    (props, ref) => {
        const {
            title,
            chipContent,
            start,
            end,
            onClick = () => {},
            focused = false,
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
                role="button"
                $textColor={textColor}
                $backgroundColor={backgroundColor}
                $borderColor={borderColor}
                $focused={focused}
                $smallEvent={
                    getDurationInMilliseconds(start, end) <=
                    0.5 * 60 * 60 * 1000
                }
                $extraSmallEvent={
                    getDurationInMilliseconds(start, end) <=
                    0.25 * 60 * 60 * 1000
                }
                tabIndex={0}
                onClick={onClick}
                onKeyDown={(e) => e.key === 'Enter' && onClick()}
                aria-label={`Event - ${title} - ${get12HourFormatFromDate(
                    start
                )} to ${get12HourFormatFromDate(end)}`}
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
                    <StyledCalendarTimeRange>
                        <span>
                            {get12HourFormatFromDate(start)} -{' '}
                            {get12HourFormatFromDate(end)}
                        </span>
                    </StyledCalendarTimeRange>
                )}
            </StyledCalendarEventWrapper>
        );
    }
);

export default CalendarEvent;
