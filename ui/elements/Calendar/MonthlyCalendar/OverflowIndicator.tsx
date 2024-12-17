import React, { useRef, useState } from 'react';

import { Icon } from '../../Icon';
import {
    StyledOverflowIndicator,
    StyledOverflowIndicatorText,
} from './MonthlyCalendar.styles';
import OverflowEventsList from './OverflowEventsList';
import { OverflowIndicatorProps } from './types';

function OverflowIndicator<T extends { start: Date; end: Date }>(
    props: OverflowIndicatorProps<T>
) {
    const { text, events, eventRenderer } = props;
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef(null);

    const onClick = () => {
        setIsOpen(true);
    };

    return (
        <StyledOverflowIndicator onClick={onClick} ref={triggerRef}>
            <StyledOverflowIndicatorText>{text}</StyledOverflowIndicatorText>
            <Icon color="var(--text-primary)" name="arrow-right" size="16" />
            {isOpen && (
                <OverflowEventsList
                    events={events}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    triggerRef={triggerRef}
                    eventRenderer={eventRenderer}
                />
            )}
        </StyledOverflowIndicator>
    );
}

export default OverflowIndicator;
