import React from 'react';

import Button, { IconButton } from '../../Button';
import {
    StyledCalendarControlsText,
    StyledCalendarMonthButton,
} from './MonthlyCalendar.styles';
import { MonthlyControlsProps } from './types';
import { getMonthLabel } from './utils';

function MonthlyControls(props: MonthlyControlsProps) {
    const { loading, monthOffset, setMonthOffset } = props;
    const currentMonth = new Date();
    currentMonth.setMonth(currentMonth.getMonth() + monthOffset);
    const monthLabel = getMonthLabel(currentMonth.getMonth());

    return (
        <StyledCalendarMonthButton>
            <IconButton
                icon="chevron-left"
                disabled={loading}
                onClick={() => setMonthOffset(monthOffset - 1)}
                ariaLabel={`Go to month ${monthLabel}`}
            />
            <StyledCalendarControlsText>
                {monthLabel} {currentMonth.getFullYear()}
            </StyledCalendarControlsText>
            <IconButton
                icon="chevron-right"
                disabled={loading}
                onClick={() => setMonthOffset(monthOffset + 1)}
                ariaLabel={`Go to month ${monthLabel}`}
            />
            <Button disabled={loading} onClick={() => setMonthOffset(0)}>
                Today
            </Button>
        </StyledCalendarMonthButton>
    );
}

export default MonthlyControls;
