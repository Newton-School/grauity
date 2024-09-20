import React, { useState } from 'react';

import Button, { IconButton } from '../Button';
import {
    checkIsToday,
    getMonthLabel,
    getTimeListIn12HourFormat,
    getWeekByOffset,
    getWeekDayLabel,
    getYearLabel,
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

const WeeklyCalendar = () => {
    const [weekOffset, setWeekOffset] = useState(0);

    const currentWeek = getWeekByOffset(weekOffset);
    const timeList = getTimeListIn12HourFormat();

    return (
        <StyledCalendarWrapper>
            <StyledCalendarMonthButton>
                <IconButton
                    icon="chevron-left"
                    onClick={() => setWeekOffset(weekOffset - 1)}
                />
                <span>
                    {`${getMonthLabel(currentWeek[0])} ${getYearLabel(
                        currentWeek[0]
                    )}`}
                </span>
                <IconButton
                    icon="chevron-right"
                    onClick={() => setWeekOffset(weekOffset + 1)}
                />
                <Button onClick={() => setWeekOffset(0)}>Today</Button>
            </StyledCalendarMonthButton>
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
};

export default WeeklyCalendar;
