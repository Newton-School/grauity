import React, { useEffect, useState } from 'react';

import MonthlyCalendar from '../MonthlyCalendar';
import { getMonthLabel } from '../utils';
import WeeklyCalendar from '../WeeklyCalendar';
import Header from './Header';
import { UnifiedCalendarProps } from './types';
import { getOffsetBy } from './utils';

function UnifiedCalendar(props: UnifiedCalendarProps<any>) {
    const {
        events = [],
        eventRenderer = () => null,
        view = 'weekly',
        onViewChange = () => {},
        shouldShowControls = true,
        header = null,
        date = new Date(),
        onDateChange = () => {},
        loading = false,
        weeklyCalendarProps = {},
        monthtlyCalendarProps = {},
    } = props;

    const [viewType, setViewType] = useState(view);
    const [currentDate, setCurrentDate] = useState(date);

    useEffect(() => {
        onViewChange(viewType);
    }, [viewType]);

    useEffect(() => {
        onDateChange(date);
    }, [currentDate]);

    switch (true) {
        case viewType === 'monthly':
            return (
                <MonthlyCalendar
                    events={events}
                    eventRenderer={(item) => eventRenderer(item, 'monthly')}
                    shouldShowMonthControls={false}
                    header={
                        <>
                            {header}
                            {shouldShowControls ? (
                                <Header
                                    loading={loading}
                                    date={currentDate}
                                    initialActiveTab={0}
                                    offsetBy={getOffsetBy(
                                        currentDate,
                                        'monthly'
                                    )}
                                    setDate={setCurrentDate}
                                    onViewChange={(currentView) => {
                                        setViewType(currentView);
                                    }}
                                    label={`monthly ${getMonthLabel(
                                        currentDate
                                    )} ${currentDate.getFullYear()}`}
                                />
                            ) : null}
                        </>
                    }
                    date={currentDate}
                    onDateChange={setCurrentDate}
                    loading={loading}
                    onViewChange={(currentView) => {
                        setViewType(currentView);
                    }}
                    {...monthtlyCalendarProps}
                />
            );
        case viewType === 'weekly':
            return (
                <WeeklyCalendar
                    events={events}
                    eventRenderer={(item) => eventRenderer(item, 'weekly')}
                    shouldShowWeekControls={false}
                    header={
                        <>
                            {header}
                            {shouldShowControls ? (
                                <Header
                                    loading={loading}
                                    date={currentDate}
                                    initialActiveTab={1}
                                    offsetBy={getOffsetBy(
                                        currentDate,
                                        'weekly'
                                    )}
                                    setDate={setCurrentDate}
                                    onViewChange={(currentView) => {
                                        setViewType(currentView);
                                    }}
                                    label={`weekly ${getMonthLabel(
                                        currentDate
                                    )} ${currentDate.getFullYear()}`}
                                />
                            ) : null}
                        </>
                    }
                    date={currentDate}
                    onDateChange={setCurrentDate}
                    loading={loading}
                    {...weeklyCalendarProps}
                />
            );
        default:
            return null;
    }
}

export default UnifiedCalendar;
export { UnifiedCalendarProps };
