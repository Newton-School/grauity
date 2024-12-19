import React from 'react';

import Button, { IconButton } from '../../Button';
import Tabs from '../../Tabs';
import { CalendarView } from '../types';
import {
    StyledCalendarControlsText,
    StyledCalendarMonthButton,
} from './MonthlyCalendar.styles';
import { MonthlyControlsProps } from './types';
import { getMonthLabel } from './utils';

const TAB_ITEMS: CalendarView[] = ['monthly', 'weekly'];

function MonthlyControls(props: MonthlyControlsProps) {
    const { loading, monthOffset, setMonthOffset, onViewChange } = props;
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

            <Tabs
                tabItems={TAB_ITEMS}
                onTabFocusChange={(idx) => onViewChange(TAB_ITEMS[idx])}
                initialActiveTab={0}
            />
        </StyledCalendarMonthButton>
    );
}

export default MonthlyControls;
