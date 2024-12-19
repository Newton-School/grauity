import React, { useEffect, useState } from 'react';

import { getMonthLabel } from '../utils';
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
import { getMonthOffsetByDate } from './utils';

function MonthlyCalendar<T>(props: MonthlyCalendarProps<T>) {
    const {
        date = new Date(),
        onDateChange = () => {},
        loading = false,
        eventRenderer,
        header = null,
        shouldShowMonthControls = true,
        events = [],
        renderDayItem,
    } = props;
    const [currentDate, setCurrentDate] = useState(date);
    const monthOffset = getMonthOffsetByDate(currentDate);

    const setMonthOffset = (offset: number) => {
        const newDate = new Date();
        newDate.setMonth(newDate.getMonth() + offset);
        setCurrentDate(newDate);
    };

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
        const previousMonthDate = new Date(currentYear, currentMonth, -i);
        datesInGrid.push(previousMonthDate);
    }

    // Append dates from current month
    for (let i = 1; i <= daysInMonth; i += 1) {
        const currentMonthDate = new Date(currentYear, currentMonth, i);
        datesInGrid.push(currentMonthDate);
    }

    // Append dates from next month
    for (let i = 0; i < offsetOfLastDayFromSaturday; i += 1) {
        const nextMonthDate = new Date(currentYear, currentMonth + 1, i + 1);
        datesInGrid.push(nextMonthDate);
    }

    // Sync Parent State with child
    useEffect(() => {
        if (date && date?.valueOf() !== currentDate?.valueOf()) {
            onDateChange(currentDate);
        }
    }, [currentDate]);

    useEffect(() => {
        if (date && date?.valueOf() !== currentDate?.valueOf()) {
            setCurrentDate(date);
        }
    }, [date]);

    return (
        <StyledMonthlyCalendarGridContainer
            aria-label={`Monthly Calendar for the month ${getMonthLabel(
                new Date(currentYear, currentMonth)
            )}`}
        >
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
