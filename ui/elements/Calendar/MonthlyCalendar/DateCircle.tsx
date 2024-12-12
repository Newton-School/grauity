import React from 'react';

import {
    StyledDateCircle,
    StyledDateCircleText,
} from './MonthlyCalendar.styles';
import { DateCircleProps } from './types';

function DateCircle(props: DateCircleProps) {
    const { date, backgroundColor, textColor } = props;

    const isInActiveMonth = true;
    const isToday = true;

    return (
        <StyledDateCircle
            isInActiveMonth={isInActiveMonth}
            isToday={isToday}
            backgroundColor={backgroundColor}
        >
            <StyledDateCircleText isToday={isToday} textColor={textColor}>
                {date.getDate()}
            </StyledDateCircleText>
        </StyledDateCircle>
    );
}

export default DateCircle;
