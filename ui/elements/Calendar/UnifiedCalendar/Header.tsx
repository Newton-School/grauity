import React from 'react';

import Button, { IconButton } from '../../Button';
import Tabs from '../../Tabs';
import { CalendarView } from '../types';
import { getMonthLabel } from '../utils';
import { UnifiedCalendarHeaderProps } from './types';
import {
    StyledCalendarControlsText,
    StyledCalendarMonthButton,
    StyledCalendarMonthCalendarControl,
    StyledTabContainer,
} from './UnifiedCalendar.styles';

const TAB_ITEMS: CalendarView[] = ['monthly', 'weekly'];

function UnifiedCalendarHeader(props: UnifiedCalendarHeaderProps) {
    const {
        loading,
        label,
        date,
        setDate,
        onViewChange,
        initialActiveTab,
        epochDiffForDateChange,
    } = props;
    const monthLabel = getMonthLabel(date);

    const decrementTimeBy = () => {
        const newDate = new Date(date.getTime() - epochDiffForDateChange);
        setDate(newDate);
    };

    const incrementTimeBy = () => {
        const newDate = new Date(date.getTime() + epochDiffForDateChange);
        setDate(newDate);
    };

    const today = () => {
        setDate(new Date());
    };

    return (
        <StyledCalendarMonthButton>
            <StyledCalendarMonthCalendarControl>
                <IconButton
                    icon="chevron-left"
                    disabled={loading}
                    onClick={decrementTimeBy}
                    ariaLabel={`Go to ${label}`}
                />
                <StyledCalendarControlsText>
                    {monthLabel} {date.getFullYear()}
                </StyledCalendarControlsText>
                <IconButton
                    icon="chevron-right"
                    disabled={loading}
                    onClick={incrementTimeBy}
                    ariaLabel={`Go to ${label}`}
                />
                <Button disabled={loading} onClick={today}>
                    Today
                </Button>
            </StyledCalendarMonthCalendarControl>

            <StyledTabContainer>
                <Tabs
                    tabItems={TAB_ITEMS}
                    onTabFocusChange={(idx) => onViewChange(TAB_ITEMS[idx])}
                    initialActiveTab={initialActiveTab}
                />
            </StyledTabContainer>
        </StyledCalendarMonthButton>
    );
}

export default UnifiedCalendarHeader;
