import React, { useEffect, useState } from 'react';

import { DAYS_IN_WEEK } from './constants';
import GridHeaderRow from './GridHeaderRow';
import Loading from './Loading';
import {
    StyledMonthlyCalendarGrid,
    StyledMonthlyCalendarGridContainer,
    StyledMonthlyGridItemContainer,
} from './MonthlyCalendar.styles';
import MonthlyCalendarGridItem from './MonthlyCalendarGridItem';
import MonthlyControls from './MonthlyControls';
import { MonthlyCalendarProps } from './types';

function MonthlyCalendar<T>(props: MonthlyCalendarProps<T>) {
    const {
        monthOffset: propsMonthOffset = 0,
        loading = false,
        eventRenderer,
        header = null,
        shouldShowMonthControls = true,
        onMonthChange = () => {},
        events = [],
        renderDayItem,
    } = props;
    const [monthOffset, setMonthOffset] = useState(propsMonthOffset);
    const currentMonth = new Date().getMonth() + monthOffset;
    const currentYear = new Date().getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const offsetOfFirstDayFromSunday = firstDayOfMonth;

    const lastDayOfMonth = new Date(
        new Date().getFullYear(),
        currentMonth + 1,
        0
    ).getDay();
    const offsetOfLastDayFromSaturday = DAYS_IN_WEEK - lastDayOfMonth - 1;

    const datesInGrid = [];
    // Append dates from previous month
    for (let i = offsetOfFirstDayFromSunday - 1; i >= 0; i -= 1) {
        const date = new Date(currentYear, currentMonth, -i);
        datesInGrid.push(date);
    }

    // Append dates from current month
    for (let i = 1; i <= daysInMonth; i += 1) {
        const date = new Date(currentYear, currentMonth, i);
        datesInGrid.push(date);
    }

    // Append dates from next month
    for (let i = 0; i < offsetOfLastDayFromSaturday; i += 1) {
        const date = new Date(currentYear, currentMonth + 1, i + 1);
        datesInGrid.push(date);
    }

    useEffect(() => {
        onMonthChange(monthOffset);
    }, [monthOffset]);

    return (
        <StyledMonthlyCalendarGridContainer>
            {header}
            {shouldShowMonthControls ? (
                <MonthlyControls
                    loading={loading}
                    monthOffset={monthOffset}
                    setMonthOffset={setMonthOffset}
                />
            ) : null}
            <GridHeaderRow />
            {loading ? (
                <Loading gridData={datesInGrid} />
            ) : (
                <StyledMonthlyGridItemContainer>
                    <StyledMonthlyCalendarGrid
                        rows={datesInGrid.length % DAYS_IN_WEEK}
                    >
                        {datesInGrid.map((item) => (
                            <MonthlyCalendarGridItem
                                monthOffset={monthOffset}
                                cellDate={item}
                                events={events}
                                eventRenderer={eventRenderer}
                                renderDayItem={renderDayItem}
                            />
                        ))}
                    </StyledMonthlyCalendarGrid>
                </StyledMonthlyGridItemContainer>
            )}
        </StyledMonthlyCalendarGridContainer>
    );
}

export default MonthlyCalendar;
