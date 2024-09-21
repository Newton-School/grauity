import React, { forwardRef, useEffect, useRef, useState } from 'react';

import Button, { IconButton } from '../Button';
import { WeeklyCalendarProps } from './types';
import {
    checkIsToday,
    getCurrentTimeStickPosition,
    getDateFullLabel,
    getMonthDetails,
    getTimeListIn12HourFormat,
    getWeekByOffset,
    getWeekDayLabel,
} from './utils';
import {
    StyledCalendarBlock,
    StyledCalendarDateLabel,
    StyledCalendarHeader,
    StyledCalendarHeaderBlock,
    StyledCalendarHeaderRow,
    StyledCalendarMonthButton,
    StyledCalendarTimeline,
    StyledCalendarTimelineBlock,
    StyledCalendarTimelineRow,
    StyledCalendarWrapper,
} from './WeeklyCalendar.styles';

const WeeklyCalendar = forwardRef<HTMLDivElement, WeeklyCalendarProps>(
    (props, ref) => {
        const {
            shouldShowWeekControls = true,
            weekOffset: initialWeekOffset = 0,
            onWeekChange = () => {},
        } = props;

        const [weekOffset, setWeekOffset] = useState(initialWeekOffset);

        const containerRef = useRef<HTMLDivElement>(null);

        const currentWeek = getWeekByOffset(weekOffset);
        const timeList = getTimeListIn12HourFormat();
        const currentTimeStickPosition = getCurrentTimeStickPosition();

        useEffect(() => {
            onWeekChange(weekOffset);
        }, [weekOffset]);

        useEffect(() => {
            if (containerRef.current) {
                containerRef.current.scrollTo({
                    top: 52 * 8.5,
                    left: 0,
                    behavior: 'instant',
                });
            }
        }, [containerRef.current]);

        return (
            <StyledCalendarWrapper
                ref={(node) => {
                    containerRef.current = node;
                    if (ref) {
                        if (typeof ref === 'function') {
                            ref(node);
                        } else {
                            // eslint-disable-next-line no-param-reassign
                            ref.current = node;
                        }
                    }
                }}
                tabIndex={0}
                aria-label={`Weekly Calendar for the week starting from ${getDateFullLabel(
                    currentWeek[0]
                )}`}
            >
                <StyledCalendarHeader>
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
                            <Button onClick={() => setWeekOffset(0)}>
                                Today
                            </Button>
                        </StyledCalendarMonthButton>
                    )}
                    <StyledCalendarHeaderRow>
                        <StyledCalendarTimelineBlock />
                        {currentWeek.map((day) => (
                            <StyledCalendarHeaderBlock
                                key={day.toLocaleDateString()}
                                $active={checkIsToday(day)}
                            >
                                <span>{getWeekDayLabel(day)}</span>
                                <StyledCalendarDateLabel
                                    $active={checkIsToday(day)}
                                >
                                    {day.getDate()}
                                </StyledCalendarDateLabel>
                            </StyledCalendarHeaderBlock>
                        ))}
                    </StyledCalendarHeaderRow>
                </StyledCalendarHeader>
                <StyledCalendarTimeline
                    tabIndex={0}
                    aria-label="Timeline for the entire week. Scroll to see more events"
                >
                    {timeList.map((time, i) => (
                        <StyledCalendarTimelineRow>
                            <StyledCalendarTimelineBlock text={time} />
                            {currentWeek.map((day) => (
                                <StyledCalendarBlock
                                    key={`${day} ${time}`}
                                    $active={checkIsToday(day)}
                                    $currentTimeStick={
                                        checkIsToday(day) &&
                                        Math.floor(currentTimeStickPosition) ===
                                            i
                                            ? currentTimeStickPosition -
                                              Math.floor(
                                                  currentTimeStickPosition
                                              )
                                            : undefined
                                    }
                                />
                            ))}
                        </StyledCalendarTimelineRow>
                    ))}
                </StyledCalendarTimeline>
            </StyledCalendarWrapper>
        );
    }
);

export default WeeklyCalendar;
