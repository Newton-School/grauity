import React, { useEffect, useRef, useState } from 'react';

import { getDateFullLabel } from '../utils';
import DateCircle from './DateCircle';
import { StyledMonthlyCalendarGridItem } from './MonthlyCalendar.styles';
import OverflowIndicator from './OverflowIndicator';
import { MonthlyCalendarGridItemProps } from './types';
import { numberOfElementsOverflowing } from './utils';

function MonthlyCalendarGridItem<T extends { start: Date; end: Date }>(
    props: MonthlyCalendarGridItemProps<T>
) {
    const { cellDate, monthOffset, events, eventRenderer, renderDayItem } =
        props;
    const [numberOfEventsToRemove, setNumberOfEventsToRemove] = useState(0);
    const gridItemRef = useRef<HTMLDivElement>(null);

    const eventsForTheDay = events.filter(
        (event) => getDateFullLabel(event.start) === getDateFullLabel(cellDate)
    );

    useEffect(() => {
        const numberOfEventsOverflowing = numberOfElementsOverflowing(
            gridItemRef.current?.clientHeight,
            eventsForTheDay.length
        );
        if (numberOfEventsOverflowing === 0) {
            setNumberOfEventsToRemove(0);
            return;
        }

        const numberOfEventsToRemoveComputed = numberOfEventsOverflowing + 1;
        setNumberOfEventsToRemove(numberOfEventsToRemoveComputed);
    }, [monthOffset]);

    const eventsToRender = eventsForTheDay.slice(
        0,
        eventsForTheDay.length - numberOfEventsToRemove
    );

    const moreEventsText = `+${numberOfEventsToRemove} more`;
    const currentActiveMonth = new Date();
    currentActiveMonth.setMonth(currentActiveMonth.getMonth() + monthOffset);

    const isInActiveMonth =
        currentActiveMonth.getMonth() === cellDate.getMonth();

    const cellBackgroundColor = isInActiveMonth
        ? 'var(--bg-primary, #FFF)'
        : 'var(--bg-secondary, #F6F7F9)';

    if (typeof renderDayItem === 'function') {
        return <>{eventsToRender.map((event) => renderDayItem(event))}</>;
    }

    return (
        <StyledMonthlyCalendarGridItem
            ref={gridItemRef}
            backgroundColor={cellBackgroundColor}
        >
            <DateCircle date={cellDate} />
            {eventsToRender.map((event) => (
                <>{eventRenderer(event)}</>
            ))}
            {numberOfEventsToRemove ? (
                <OverflowIndicator
                    events={eventsForTheDay}
                    eventRenderer={eventRenderer}
                    text={moreEventsText}
                />
            ) : null}
        </StyledMonthlyCalendarGridItem>
    );
}

export default MonthlyCalendarGridItem;
