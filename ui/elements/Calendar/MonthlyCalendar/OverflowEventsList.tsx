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

        const rightVal = triggerRefRect?.right;
        const rightBoundary = document.body?.getBoundingClientRect().right;

        if (rightVal + 10 >= rightBoundary) {
            setRenderPosition({
                left: triggerRefRect?.left - popoverWidth,
                top: triggerRefRect?.top - 10,
            });
            return;
        }

        let leftVal = triggerRefRect?.left + center;
        leftVal = leftVal > 0 ? leftVal : 0;

        setRenderPosition({
            left: leftVal,
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
            position={renderPosition}
            onClose={handleClose}
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
