import React from 'react';
import PopOver from 'ui/elements/PopOver';

import MonthlyCalendarEventItem from '../MonthlyCalendarEvent';
import { EVENT_HEIGHT } from './constants';
import DateCircle from './DateCircle';
import { StyledOverflowEventsListContainer } from './MonthlyCalendar.styles';
import { MonthlyCalendarEvent } from './types';

interface OverflowEventsListProps {
    triggerRef: React.RefObject<HTMLDivElement>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    events: MonthlyCalendarEvent[];
}

function OverflowEventsList(props: OverflowEventsListProps) {
    const { isOpen, setIsOpen, triggerRef, events } = props;

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
                {events.map((event) => (
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
            </StyledOverflowEventsListContainer>
        </PopOver>
    );
}

export default OverflowEventsList;
