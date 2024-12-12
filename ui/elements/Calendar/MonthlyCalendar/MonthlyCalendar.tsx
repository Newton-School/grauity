import React from 'react';

import { StyledMonthlyCalendarGrid } from './MonthlyCalendar.styles';
import MonthlyCalendarGridItem from './MonthlyCalendarGridItem';

const array = Array.from({ length: 35 }, (_, index) => index);

function MonthlyCalendar() {
    return (
        <StyledMonthlyCalendarGrid>
            {array.map((item) => (
                <MonthlyCalendarGridItem key={item} />
            ))}
        </StyledMonthlyCalendarGrid>
    );
}

export default MonthlyCalendar;
