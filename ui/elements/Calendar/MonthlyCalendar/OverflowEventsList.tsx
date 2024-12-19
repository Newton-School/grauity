import React from 'react';

import PopOver from '../../PopOver';
import { CalendarEventRequiredProps } from '../types';
import DateCircle from './DateCircle';
import { StyledOverflowEventsListContainer } from './MonthlyCalendar.styles';
import { OverflowEventsListProps } from './types';

function OverflowEventsList<T extends CalendarEventRequiredProps>(
    props: OverflowEventsListProps<T>
) {
    const { isOpen, setIsOpen, triggerRef, events, eventRenderer } = props;
    const cellDate = events[0].start;

    const handleClose = () => {
        setIsOpen(false);
    };

    const { left, top } = triggerRef?.current?.getBoundingClientRect?.() ?? {
        left: 0,
        top: 0,
    };

    return (
        <PopOver
            isOpen={isOpen}
            autoAdjust
            direction="left"
            disableBackgroundScroll
            minimumOffset={{
                bottom: 0,
                left: 10,
                right: 0,
                top: 0,
            }}
            position={{
                left,
                top: top - 10,
            }}
            onClose={handleClose}
            parentRef={null}
            shouldCloseOnOutsideClick
        >
            <StyledOverflowEventsListContainer>
                <DateCircle date={cellDate} />
                {events.map((event) => eventRenderer(event))}
            </StyledOverflowEventsListContainer>
        </PopOver>
    );
}

export default OverflowEventsList;
