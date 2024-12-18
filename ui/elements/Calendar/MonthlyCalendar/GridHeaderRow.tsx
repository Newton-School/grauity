import React from 'react';

import { DAYS_OF_WEEK } from './constants';
import {
    StyledDayOfWeekHeader,
    StyledDayOfWeekHeaderItem,
    StyledDayOfWeekHeaderItemText,
} from './MonthlyCalendar.styles';

function GridHeaderRow() {
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

export default GridHeaderRow;
