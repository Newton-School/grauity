import React, { forwardRef } from 'react';

import { DAYS_IN_WEEK } from './constants';
import Header from './Header';
import {
    StyledMonthlyCalendarGrid,
    StyledMonthlyCalendarGridContainer,
    StyledMonthlyGridItemContainer,
} from './MonthlyCalendar.styles';
import MonthlyCalendarGridItem from './MonthlyCalendarGridItem';
import { MonthlyCalendarProps } from './types';

const MonthlyCalendar = forwardRef<HTMLDivElement, MonthlyCalendarProps<any>>(
    (props, ref) => {
        const { monthOffset } = props;
        const currentMonth = new Date().getMonth() + monthOffset;
        const currentYear = new Date().getFullYear();
        const daysInMonth = new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();

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

        return (
            <StyledMonthlyCalendarGridContainer ref={ref}>
                <Header />
                <StyledMonthlyGridItemContainer>
                    <StyledMonthlyCalendarGrid
                        rows={datesInGrid.length % DAYS_IN_WEEK}
                    >
                        {datesInGrid.map((item) => (
                            <MonthlyCalendarGridItem
                                monthOffset={monthOffset}
                                cellDate={item}
                            />
                        ))}
                    </StyledMonthlyCalendarGrid>
                </StyledMonthlyGridItemContainer>
            </StyledMonthlyCalendarGridContainer>
        );
    }
);

// Add display name for better debugging
MonthlyCalendar.displayName = 'MonthlyCalendar';

export default MonthlyCalendar;
