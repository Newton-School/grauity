import React from 'react';

import Header from './Header';
import {
    StyledMonthlyCalendarGrid,
    StyledMonthlyCalendarGridContainer,
} from './MonthlyCalendar.styles';
import MonthlyCalendarGridItem from './MonthlyCalendarGridItem';

const array = Array.from({ length: 35 }, (_, index) => index);

function MonthlyCalendar() {
    return (
        <StyledMonthlyCalendarGridContainer>
            <Header />
            <StyledMonthlyCalendarGrid>
                {array.map((item) => (
                    <MonthlyCalendarGridItem key={item} />
                ))}
            </StyledMonthlyCalendarGrid>
        </StyledMonthlyCalendarGridContainer>
    );
}

export default MonthlyCalendar;
