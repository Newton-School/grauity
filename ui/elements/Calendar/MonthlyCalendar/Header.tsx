import React from 'react';

import {
    StyledDayOfWeekHeader,
    StyledDayOfWeekHeaderItem,
    StyledDayOfWeekHeaderItemText,
} from './MonthlyCalendar.styles';

const DAYS_OF_WEEK = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

function Header() {
    return (
        <StyledDayOfWeekHeader>
            {DAYS_OF_WEEK.map((day) => (
                <StyledDayOfWeekHeaderItem>
                    <StyledDayOfWeekHeaderItemText>
                        {day.slice(0, 3)}
                    </StyledDayOfWeekHeaderItemText>
                </StyledDayOfWeekHeaderItem>
            ))}
        </StyledDayOfWeekHeader>
    );
}

export default Header;
