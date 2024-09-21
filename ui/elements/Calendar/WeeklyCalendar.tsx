import React, { forwardRef, useEffect, useRef, useState } from 'react';

import Button, { IconButton } from '../Button';
import { CalendarEventRecord, WeeklyCalendarProps } from './types';
import {
    checkIsToday,
    getCurrentTimeStickPosition,
    getDateFullLabel,
    getEventBlockHeight,
    getEventBlockStartPosition,
    getMonthDetails,
    getStartTimestampOfHourBlock,
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
    StyledEventWrapper,
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
        const [calendarEvents, setCalendarEvents] =
            useState<CalendarEventRecord>({});

        const containerRef = useRef<HTMLDivElement>(null);

        const currentWeek = getWeekByOffset(weekOffset);
        const timeList = getTimeListIn12HourFormat();
        const currentTimeStickPosition = getCurrentTimeStickPosition();

        useEffect(() => {
            setWeekOffset(initialWeekOffset);
        }, [initialWeekOffset]);

        useEffect(() => {
            onWeekChange(weekOffset);
        }, [weekOffset]);

        useEffect(() => {
            if (events) {
                const newCalendarEvents: CalendarEventRecord = {};
                events.forEach((event) => {
                    const eventDate = new Date(
                        event.start.getFullYear(),
                        event.start.getMonth(),
                        event.start.getDate(),
                        event.start.getHours()
                    );
                    const eventTimestamp = eventDate.getTime();
                    if (!newCalendarEvents[eventTimestamp]) {
                        newCalendarEvents[eventTimestamp] = [];
                    }
                    newCalendarEvents[eventTimestamp].push(event);
                });
                setCalendarEvents(newCalendarEvents);
            }
        }, [events]);

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
                        <StyledCalendarTimelineBlock $headerBlock />
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
                    {timeList.map((time, hourIndex) => (
                        <StyledCalendarTimelineRow key={time}>
                            <StyledCalendarTimelineBlock $text={time} />
                            {currentWeek.map((day) => (
                                <StyledCalendarBlock
                                    key={`${day} ${time}`}
                                    $active={checkIsToday(day)}
                                    $currentTimeStick={
                                        checkIsToday(day) &&
                                        Math.floor(currentTimeStickPosition) ===
                                            hourIndex
                                            ? currentTimeStickPosition -
                                              Math.floor(
                                                  currentTimeStickPosition
                                              )
                                            : undefined
                                    }
                                >
                                    {(
                                        calendarEvents[
                                            getStartTimestampOfHourBlock(
                                                day,
                                                hourIndex
                                            )
                                        ] || []
                                    ).map((event, eventIndex) => (
                                        <StyledEventWrapper
                                            // eslint-disable-next-line react/no-array-index-key
                                            key={`${eventIndex}_${event.start.toString()}`}
                                            $startPosition={
                                                getEventBlockStartPosition(
                                                    event
                                                ) * 100
                                            }
                                            $height={
                                                getEventBlockHeight(event) * 100
                                            }
                                        >
                                            Event
                                        </StyledEventWrapper>
                                    ))}
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
