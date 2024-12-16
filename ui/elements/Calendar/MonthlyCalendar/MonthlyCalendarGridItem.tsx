import React, { useEffect, useRef, useState } from 'react';

import DateCircle from './DateCircle';
import { StyledMonthlyCalendarGridItem } from './MonthlyCalendar.styles';
import OverflowIndicator from './OverflowIndicator';
import { MonthlyCalendarGridItemProps } from './types';
import { numberOfElementsOverflowing } from './utils';

function MonthlyCalendarGridItem<T>(props: MonthlyCalendarGridItemProps<T>) {
    const { cellDate, monthOffset, events, eventRenderer, renderItem } = props;
    const [numberOfEventsToRemove, setNumberOfEventsToRemove] = useState(0);
    const gridItemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const numberOfEventsOverflowing = numberOfElementsOverflowing(
            gridItemRef.current?.clientHeight,
            events.length
        );
        if (numberOfEventsOverflowing === 0) {
            return;
        }

        const numberOfEventsToRemoveComputed = numberOfEventsOverflowing + 1;
        setNumberOfEventsToRemove(numberOfEventsToRemoveComputed);
    }, []);

    const eventsToRender = events.slice(
        0,
        events.length - numberOfEventsToRemove
    );

    const moreEventsText = `+${numberOfEventsToRemove} more`;
    const today = new Date();
    const activeMonth = today.getMonth() + monthOffset;
    const isInActiveMonth = activeMonth === cellDate.getMonth();

    const cellBackgroundColor = isInActiveMonth
        ? 'var(--bg-primary, #FFF)'
        : 'var(--bg-secondary, #F6F7F9)';

    if (typeof renderItem === 'function') {
        return <>{eventsToRender.map((event) => renderItem(event))}</>;
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
                    events={events}
                    eventRenderer={eventRenderer}
                    text={moreEventsText}
                />
            ) : null}
        </StyledMonthlyCalendarGridItem>
    );
}

export default MonthlyCalendarGridItem;
