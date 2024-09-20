import React, { forwardRef, useEffect, useState } from 'react';

import Button, { IconButton } from '../Button';
import { WeeklyCalendarProps } from './types';
import {
    checkIsToday,
    getDateFullLabel,
    getMonthDetails,
    getTimeListIn12HourFormat,
    getWeekByOffset,
    getWeekDayLabel,
} from './utils';
import {
    StyledCalendarBlock,
    StyledCalendarEmptyBlock,
    StyledCalendarHeader,
    StyledCalendarMonthButton,
    StyledCalendarTimeline,
    StyledCalendarTimelineBlock,
    StyledCalendarTimelineRow,
    StyledCalendarWeekDate,
    StyledCalendarWrapper,
} from './WeeklyCalendar.styles';

const WeeklyCalendar = forwardRef<HTMLDivElement, WeeklyCalendarProps>(
    (props, ref) => {
        const {
            events = [],
            shouldShowWeekControls = true,
            weekOffset: initialWeekOffset = 0,
            onWeekChange = () => {},
        } = props;

        const [weekOffset, setWeekOffset] = useState(initialWeekOffset);

        const currentWeek = getWeekByOffset(weekOffset);
        const timeList = getTimeListIn12HourFormat();

        useEffect(() => {
            onWeekChange(weekOffset);
        }, [weekOffset]);

        return (
            <StyledCalendarWrapper
                ref={ref}
                tabIndex={0}
                aria-label={`Weekly Calendar for the week starting from ${getDateFullLabel(
                    currentWeek[0]
                )}`}
            >
                {shouldShowWeekControls && (
                    <StyledCalendarMonthButton>
                        <IconButton
                            icon="chevron-left"
                            onClick={() => setWeekOffset(weekOffset - 1)}
                            ariaLabel={`Go to week starting from ${getDateFullLabel(
                                currentWeek[0],
                                -7
                            )}`}
                        />
                        <div>{getMonthDetails(currentWeek[0])}</div>
                        <IconButton
                            icon="chevron-right"
                            onClick={() => setWeekOffset(weekOffset + 1)}
                            ariaLabel={`Go to week starting from ${getDateFullLabel(
                                currentWeek[0],
                                7
                            )}`}
                        />
                        <Button onClick={() => setWeekOffset(0)}>Today</Button>
                    </StyledCalendarMonthButton>
                )}
                <StyledCalendarHeader>
                    <StyledCalendarEmptyBlock />
                    {currentWeek.map((day) => (
                        <StyledCalendarBlock
                            key={day.toLocaleDateString()}
                            $active={checkIsToday(day)}
                        >
                            <span>{getWeekDayLabel(day)}</span>
                            <StyledCalendarWeekDate $active={checkIsToday(day)}>
                                {day.getDate()}
                            </StyledCalendarWeekDate>
                        </StyledCalendarBlock>
                    ))}
                </StyledCalendarHeader>
                <StyledCalendarTimeline>
                    {timeList.map((time) => (
                        <StyledCalendarTimelineRow key={time}>
                            <StyledCalendarTimelineBlock text={time} />
                            {currentWeek.map((day) => (
                                <StyledCalendarBlock key={`${day} ${time}`}>
                                    <span>
                                        {day.toLocaleDateString()}, {time}
                                    </span>
                                </StyledCalendarBlock>
                            ))}
                        </StyledCalendarTimelineRow>
                    ))}
                </StyledCalendarTimeline>
            </StyledCalendarWrapper>
        );
    }
);

export default WeeklyCalendar;
