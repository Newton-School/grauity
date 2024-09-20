import React from 'react';

import {
    checkIsToday,
    getTimeListIn12HourFormat,
    getWeekByOffset,
    getWeekDayLabel,
} from './utils';
import {
    StyledCalendarBlock,
    StyledCalendarEmptyBlock,
    StyledCalendarHeader,
    StyledCalendarTimeline,
    StyledCalendarTimelineBlock,
    StyledCalendarTimelineRow,
    StyledCalendarWeekDate,
    StyledCalendarWrapper,
} from './WeeklyCalendar.styles';

const WeeklyCalendar = () => {
    const currentWeek = getWeekByOffset();
    const timeList = getTimeListIn12HourFormat();

    return (
        <StyledCalendarWrapper>
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
