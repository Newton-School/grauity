import React, { forwardRef } from 'react';
import Chip from 'ui/elements/Chip';

import { get12HourFormatFromDate } from '../utils';
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
                    {chipContent && (
                        <Chip
                            size="medium"
                            backgroundColor={
                                chipBackgroundColor ||
                                'var(--color-brand-600, #005ED1);'
                            }
                            textColor={
                                chipTextColor || 'var(--text-action2, #fff);'
                            }
                        >
                            {chipContent}
                        </Chip>
                    )}
                </StyledCalendarEventTitleRow>
                <span>
                    {get12HourFormatFromDate(start)} -{' '}
                    {get12HourFormatFromDate(end)}
                </span>
            </StyledCalendarEventWrapper>
        );
    }
);

export default CalendarEvent;
