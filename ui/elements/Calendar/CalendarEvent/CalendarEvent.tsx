/* eslint-disable indent */
import React, { forwardRef } from 'react';

import Chip from '../../Chip';
import {
    get12HourFormatFromDate,
    getDateStringInDDMMMYYYHHmmFormat,
    getDurationInMilliseconds,
} from '../utils';
import {
    StyledCalendarEventText,
    StyledCalendarEventTimeRange,
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
                aria-label={`Event - ${title} - ${getDateStringInDDMMMYYYHHmmFormat(
                    start
                )} to ${getDateStringInDDMMMYYYHHmmFormat(end)}`}
            >
                <StyledCalendarEventTitleRow>
                    <StyledCalendarEventText>
                        <span>{title}</span>
                    </StyledCalendarEventText>
                    {typeof chipContent === 'string' &&
                        chipContent.length > 0 && (
                            <Chip
                                size="small"
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
                    <StyledCalendarEventTimeRange>
                        <span>
                            {get12HourFormatFromDate(start)} -{' '}
                            {get12HourFormatFromDate(end)}
                        </span>
                    </StyledCalendarEventTimeRange>
                )}
            </StyledCalendarEventWrapper>
        );
    }
);

export default CalendarEvent;
