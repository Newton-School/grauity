import React, { useState } from 'react';

import { Icon } from '../../Icon';
import { CalendarEventRequiredProps } from '../types';
import {
    StyledOverflowIndicator,
    StyledOverflowIndicatorText,
} from './MonthlyCalendar.styles';
import OverflowEventsList from './OverflowEventsList';
import { OverflowIndicatorProps } from './types';

function OverflowIndicator<T extends CalendarEventRequiredProps>(
    props: OverflowIndicatorProps<T>
) {
    const { text, events, eventRenderer, triggerRef } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(true);
    };

    return (
        <StyledOverflowIndicator onClick={onClick}>
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
