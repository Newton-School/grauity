import React, { useEffect, useRef, useState } from 'react';

import MonthlyCalendarEventItem from '../MonthlyCalendarEvent';
import { EVENT_HEIGHT } from './constants';
import DateCircle from './DateCircle';
import { StyledMonthlyCalendarGridItem } from './MonthlyCalendar.styles';
import OverflowIndicator from './OverflowIndicator';
import { MonthlyCalendarEvent, MonthlyCalendarGridItemProps } from './types';
import { numberOfElementsOverflowing } from './utils';

const EVENTS_DATA: MonthlyCalendarEvent[] = [
    {
        id: '1',
        title: 'Event 1',
        start: new Date(2024, 9, 25, 8, 0),
        end: new Date(2024, 9, 25, 10, 0),
    },
    {
        id: '2',
        title: 'Event 2',
        start: new Date(2024, 9, 25, 10, 0),
        end: new Date(2024, 9, 25, 12, 0),
    },
    {
        id: '3',
        title: 'Event 3',
        start: new Date(2024, 9, 25, 12, 0),
        end: new Date(2024, 9, 25, 14, 0),
    },
    {
        id: '4',
        title: 'Event 4',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '5',
        title: 'Event 5',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '6',
        title: 'Event 6',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '7',
        title: 'Event 7',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '8',
        title: 'Event 8',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '9',
        title: 'Event 9',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
    {
        id: '10',
        title: 'Event 10',
        start: new Date(2024, 9, 25, 14, 0),
        end: new Date(2024, 9, 25, 16, 0),
    },
];

function MonthlyCalendarGridItem(props: MonthlyCalendarGridItemProps) {
    const { cellDate, monthOffset } = props;
    const [numberOfEventsToRemove, setNumberOfEventsToRemove] = useState(0);
    const gridItemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const numberOfEventsOverflowing = numberOfElementsOverflowing(
            gridItemRef.current?.clientHeight,
            EVENTS_DATA.length
        );
        if (numberOfEventsOverflowing === 0) {
            return;
        }

        const numberOfEventsToRemoveComputed = numberOfEventsOverflowing + 1;
        setNumberOfEventsToRemove(numberOfEventsToRemoveComputed);
    }, []);

    const eventsToRender = EVENTS_DATA.slice(
        0,
        EVENTS_DATA.length - numberOfEventsToRemove
    );

    const moreEventsText = `+${numberOfEventsToRemove} more`;
    const today = new Date();
    const activeMonth = today.getMonth() + monthOffset;
    const isInActiveMonth = activeMonth === cellDate.getMonth();

    const cellBackgroundColor = isInActiveMonth
        ? 'var(--bg-primary, #FFF)'
        : 'var(--bg-secondary, #F6F7F9)';

    return (
        <StyledMonthlyCalendarGridItem
            ref={gridItemRef}
            backgroundColor={cellBackgroundColor}
        >
            <DateCircle date={cellDate} />
            {eventsToRender.map((event) => (
                <MonthlyCalendarEventItem
                    key={event.id}
                    eventTime={event.start}
                    eventTitle={event.title}
                    eventTitleColor="var(--text-action2)"
                    eventTimeColor="var(--text-action2)"
                    backgroundColor="var(--bg-action-brand)"
                    height={`${EVENT_HEIGHT}px`}
                />
            ))}
            {numberOfEventsToRemove ? (
                <OverflowIndicator events={EVENTS_DATA} text={moreEventsText} />
            ) : null}
        </StyledMonthlyCalendarGridItem>
    );
}

export default MonthlyCalendarGridItem;
