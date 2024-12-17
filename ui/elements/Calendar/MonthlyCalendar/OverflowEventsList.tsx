import React from 'react';

import PopOver from '../../PopOver';
import DateCircle from './DateCircle';
import { StyledOverflowEventsListContainer } from './MonthlyCalendar.styles';
import { OverflowEventsListProps } from './types';

function OverflowEventsList<T>(props: OverflowEventsListProps<T>) {
    const { isOpen, setIsOpen, triggerRef, events, eventRenderer } = props;

    const handleClose = () => {
        setIsOpen(false);
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
            onClose={handleClose}
            parentRef={null}
            shouldCloseOnOutsideClick
            triggerRef={triggerRef}
        >
            <StyledOverflowEventsListContainer>
                <DateCircle date={new Date()} />
                {events.map((event) => eventRenderer(event))}
            </StyledOverflowEventsListContainer>
        </PopOver>
    );
}

export default OverflowEventsList;
