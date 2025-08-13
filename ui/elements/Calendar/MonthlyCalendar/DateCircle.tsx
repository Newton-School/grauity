import React from 'react';

import {
    StyledDateCircle,
    StyledDateCircleText,
} from './MonthlyCalendar.styles';
import { DateCircleProps } from './types';

function DateCircle(props: DateCircleProps) {
    const { date, backgroundColor, textColor } = props;

    const today = new Date();

    const isInActiveMonth = today.getMonth() === date.getMonth();
    const isToday = today.toDateString() === date.toDateString();

    return (
        <StyledDateCircle
            $isInActiveMonth={isInActiveMonth}
            $isToday={isToday}
            $backgroundColor={backgroundColor}
        >
            <StyledDateCircleText $isToday={isToday} $textColor={textColor}>
                {date.getDate()}
            </StyledDateCircleText>
        </StyledDateCircle>
    );
}

export default DateCircle;
