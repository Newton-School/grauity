/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react';
import ContainerDimensions from 'react-container-dimensions';

import Button, { IconButton } from '../Button';
import { CALENDAR_BLOCK_HEIGHT } from './constants';
import EventRenderer from './EventRenderer';
import { CalendarEventRecordExtended, WeeklyCalendarProps } from './types';
import {
    checkIsToday,
    getCurrentTimeStickPosition,
    getDateFullLabel,
    getEventBlockHeight,
    getEventBlockStartPosition,
    getMonthDetails,
    getOverlapInformationForDay,
    getStartTimestampOfHourBlock,
    getTimeListIn12HourFormat,
    getWeekByOffset,
    getWeekDayLabel,
    isPlaceholderBlock,
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
    StyledPlaceholderBlock,
} from './WeeklyCalendar.styles';

export default function WeeklyCalendar<T>(props: WeeklyCalendarProps<T>) {
    const {
        events = [],
        eventRenderer,
        shouldShowWeekControls = true,
        weekOffset: initialWeekOffset = 0,
        onWeekChange = () => {},
        loading = false,
    } = props;

    const [weekOffset, setWeekOffset] = useState(initialWeekOffset);
    const [calendarEvents, setCalendarEvents] = useState<
        CalendarEventRecordExtended<T>
    >({});
    const [eventsGroupedByDay, setEventsGroupedByDay] =
        useState<CalendarEventRecordExtended<T> | null>(null);
    const [overlappedEventsData, setOverlappedEventsData] =
        useState<CalendarEventRecordExtended<T> | null>(null);
    const [currentTimeStickPosition, setCurrentTimeStickPosition] = useState(
        getCurrentTimeStickPosition()
    );

    const containerRef = useRef<HTMLDivElement>(null);

    const currentWeek = getWeekByOffset(weekOffset);
    const timeList = getTimeListIn12HourFormat();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTimeStickPosition(getCurrentTimeStickPosition());
        }, 5 * 60 * 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setWeekOffset(initialWeekOffset);
    }, [initialWeekOffset]);

    useEffect(() => {
        onWeekChange(weekOffset);
    }, [weekOffset]);

    useEffect(() => {
        if (events) {
            const newEventsGroupedByDay: CalendarEventRecordExtended<T> = {};
            events.forEach((event) => {
                const eventStartDate = new Date(
                    event.start.getFullYear(),
                    event.start.getMonth(),
                    event.start.getDate()
                );
                const eventEndDate = new Date(
                    event.end.getFullYear(),
                    event.end.getMonth(),
                    event.end.getDate()
                );
                const eventEndForcedDate = new Date(
                    event.start.getFullYear(),
                    event.start.getMonth(),
                    event.start.getDate(),
                    23,
                    59,
                    59
                );
                const eventDay = eventStartDate.getDate();
                if (!newEventsGroupedByDay[eventDay]) {
                    newEventsGroupedByDay[eventDay] = [];
                }
                newEventsGroupedByDay[eventDay].push({
                    ...event,
                    overlap: 1,
                    index: 0,
                    forcedEventData:
                        eventEndDate > eventStartDate
                            ? { start: event.start, end: eventEndForcedDate }
                            : undefined,
                });
            });
            setEventsGroupedByDay(newEventsGroupedByDay);
        }
    }, [events]);

    const changeOverlapperdEventsData = async () => {
        if (eventsGroupedByDay) {
            const newOverlappedEventsData: CalendarEventRecordExtended<T> = {};
            await Promise.all(
                Object.keys(eventsGroupedByDay).map(async (day) => {
                    const dayKey = parseInt(day, 10);
                    const eventsArr = eventsGroupedByDay[dayKey];
                    newOverlappedEventsData[dayKey] =
                        await getOverlapInformationForDay(eventsArr);
                })
            );
            setOverlappedEventsData(newOverlappedEventsData);
        }
    };

    useEffect(() => {
        changeOverlapperdEventsData();
    }, [eventsGroupedByDay]);

    useEffect(() => {
        if (overlappedEventsData) {
            const newCalendarEvents: CalendarEventRecordExtended<T> = {};
            Object.keys(overlappedEventsData).forEach((day) => {
                const dayKey = parseInt(day, 10);
                (overlappedEventsData[dayKey] || []).forEach((event) => {
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
            });
            setCalendarEvents(newCalendarEvents);
        }
    }, [overlappedEventsData]);

    useEffect(() => {
        if (containerRef.current && containerRef.current.scrollTo) {
            containerRef.current.scrollTo({
                top: CALENDAR_BLOCK_HEIGHT * 8.5,
                left: 0,
                behavior: 'auto',
            });
        }
    }, [containerRef.current]);

    return (
        <StyledCalendarWrapper
            ref={containerRef}
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
                            disabled={loading}
                            onClick={() => setWeekOffset(weekOffset - 1)}
                            ariaLabel={`Go to week starting from ${getDateFullLabel(
                                currentWeek[0],
                                -7
                            )}`}
                        />
                        <div>{getMonthDetails(currentWeek[0])}</div>
                        <IconButton
                            icon="chevron-right"
                            disabled={loading}
                            onClick={() => setWeekOffset(weekOffset + 1)}
                            ariaLabel={`Go to week starting from ${getDateFullLabel(
                                currentWeek[0],
                                7
                            )}`}
                        />
                        <Button
                            disabled={loading}
                            onClick={() => setWeekOffset(0)}
                        >
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
                        <StyledCalendarTimelineBlock
                            $text={time !== '12 AM' ? time : null}
                        />
                        {currentWeek.map((day) => (
                            <StyledCalendarBlock
                                key={`${day} ${time}`}
                                $active={checkIsToday(day)}
                                $currentTimeStick={
                                    checkIsToday(day) &&
                                    Math.floor(currentTimeStickPosition) ===
                                        hourIndex
                                        ? currentTimeStickPosition -
                                          Math.floor(currentTimeStickPosition)
                                        : undefined
                                }
                            >
                                {loading &&
                                    isPlaceholderBlock(day, hourIndex) && (
                                        <>
                                            <StyledEventWrapper
                                                $startPosition={0}
                                                $height={50}
                                                $widthFactor={1}
                                                $indexFactor={0}
                                            >
                                                <ContainerDimensions>
                                                    {({ width, height }) => (
                                                        <StyledPlaceholderBlock
                                                            width={width}
                                                            height={height}
                                                        />
                                                    )}
                                                </ContainerDimensions>
                                            </StyledEventWrapper>
                                            <StyledEventWrapper
                                                $startPosition={50}
                                                $height={50}
                                                $widthFactor={1}
                                                $indexFactor={0}
                                            >
                                                <ContainerDimensions>
                                                    {({ width, height }) => (
                                                        <StyledPlaceholderBlock
                                                            width={width}
                                                            height={height}
                                                        />
                                                    )}
                                                </ContainerDimensions>
                                            </StyledEventWrapper>
                                        </>
                                    )}
                                {!loading &&
                                    (
                                        calendarEvents[
                                            getStartTimestampOfHourBlock(
                                                day,
                                                hourIndex
                                            )
                                        ] || []
                                    ).map((event, eventIndex) => {
                                        const forcedEventData =
                                            event.forcedEventData || event;
                                        return (
                                            <StyledEventWrapper
                                                // eslint-disable-next-line react/no-array-index-key
                                                key={`${eventIndex}_${forcedEventData.start.toString()}`}
                                                $startPosition={
                                                    getEventBlockStartPosition(
                                                        event
                                                    ) * 100
                                                }
                                                $height={
                                                    getEventBlockHeight(
                                                        forcedEventData
                                                    ) * 100
                                                }
                                                $widthFactor={
                                                    3 / (2 * event.overlap + 1)
                                                }
                                                $indexFactor={
                                                    (2 * event.index) / 3
                                                }
                                            >
                                                <EventRenderer
                                                    event={event}
                                                    eventRenderer={
                                                        eventRenderer
                                                    }
                                                />
                                            </StyledEventWrapper>
                                        );
                                    })}
                            </StyledCalendarBlock>
                        ))}
                    </StyledCalendarTimelineRow>
                ))}
            </StyledCalendarTimeline>
        </StyledCalendarWrapper>
    );
}

export type { WeeklyCalendarProps };
