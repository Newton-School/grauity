import React from 'react';

import DateCircle from './DateCircle';

function MonthlyCalendar() {
    return <DateCircle date={new Date()} />;
}

export default MonthlyCalendar;
