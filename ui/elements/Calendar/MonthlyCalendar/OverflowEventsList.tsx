import React, { useEffect, useRef, useState } from 'react';

import PopOver from '../../PopOver';
import { CalendarEventRequiredProps } from '../types';
import DateCircle from './DateCircle';
import { StyledOverflowEventsListContainer } from './MonthlyCalendar.styles';
import { OverflowEventsListProps } from './types';

function OverflowEventsList<T extends CalendarEventRequiredProps>(
    props: OverflowEventsListProps<T>
) {
    const { isOpen, setIsOpen, triggerRef, events, eventRenderer } = props;
    const [renderPosition, setRenderPosition] = useState({
        left: 0,
        top: 0,
    });

    const cellDate = events[0].start;
    const popoverDataRef = useRef(null);

    useEffect(() => {
        const triggerRefRect = triggerRef?.current?.getBoundingClientRect();
        const popoverWidth =
            popoverDataRef?.current?.getBoundingClientRect()?.width ?? 0;
        const gridWidth = triggerRef?.current?.getBoundingClientRect?.()?.width;

        const center = (-popoverWidth + gridWidth) / 2;
        setRenderPosition({
            left: triggerRefRect?.left + center,
            top: triggerRefRect?.top - 10,
        });
    }, [popoverDataRef?.current]);

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
                left: 0,
                right: 0,
                top: 0,
            }}
            position={renderPosition}
            onClose={handleClose}
            parentRef={null}
            shouldCloseOnOutsideClick
        >
            <StyledOverflowEventsListContainer ref={popoverDataRef}>
                <DateCircle date={cellDate} />
                {events.map((event) => eventRenderer(event))}
            </StyledOverflowEventsListContainer>
        </PopOver>
    );
}

export default OverflowEventsList;
