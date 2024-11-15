/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react';

import { getScrollableParent } from '../../../common/utils';
import Button, { IconButton } from '../Button';
import Placeholder from '../Placeholder';
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
    StyledCalendarExternalHeaderContainer,
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

export default function WeeklyCalendar<T>(props: WeeklyCalendarProps<T>) {
    const {
        events = [],
        eventRenderer,
        header,
        shouldShowWeekControls = true,
        weekOffset: initialWeekOffset = 0,
        onWeekChange = () => {},
        loading = false,
        defaultScrollHour = 8.5,
        shouldScrollToFirstEvent = true,
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
        if (!containerRef.current) {
            return;
        }
        const target = getScrollableParent(containerRef.current);

        let scrollTop = CALENDAR_BLOCK_HEIGHT * defaultScrollHour;

        if (shouldScrollToFirstEvent) {
            let earliestEventTime = Infinity;

            Object.keys(calendarEvents || []).forEach((timestamp) => {
                const cEvents = calendarEvents[parseInt(timestamp, 10)];
                const hours = new Date(parseInt(timestamp, 10)).getHours();
                if (cEvents && cEvents.length > 0) {
                    earliestEventTime = Math.min(earliestEventTime, hours);
                }
            });

            if (earliestEventTime !== Infinity) {
                scrollTop = CALENDAR_BLOCK_HEIGHT * (earliestEventTime - 1);
            }
        }

        target.scrollTo({ top: scrollTop, behavior: 'auto' });
    }, [containerRef.current, Object.keys(calendarEvents || []).length]);

    return (
        <StyledCalendarWrapper
            ref={containerRef}
            tabIndex={0}
            aria-label={`Weekly Calendar for the week starting from ${getDateFullLabel(
                currentWeek[0]
            )}`}
        >
            <StyledCalendarHeader>
                <StyledCalendarExternalHeaderContainer>
                    {header}
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
                </StyledCalendarExternalHeaderContainer>
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
                                                <Placeholder border="1px solid var(--bg-primary, #fff);" />
                                            </StyledEventWrapper>
                                            <StyledEventWrapper
                                                $startPosition={50}
                                                $height={50}
                                                $widthFactor={1}
                                                $indexFactor={0}
                                            >
                                                <Placeholder border="1px solid var(--bg-primary, #fff);" />
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
                                                $focused={event.focused}
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
