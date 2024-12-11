import React, { useState } from 'react';
import Button, { IconButton } from 'ui/elements/Button';
import { WeeklyCalendar, WeeklyCalendarProps } from 'ui/elements/Calendar';
import { getMonthDetails, getWeekByOffset } from 'ui/elements/Calendar/utils';
import { StyledCalendarMonthButton } from 'ui/elements/Calendar/WeeklyCalendar/WeeklyCalendar.styles';

import withRemovePadding from '../../../decorators/withRemovePadding';

export default {
    title: 'Elements/Calendar/WeeklyCalendarWithoutWeekControls',
    component: WeeklyCalendar,
    decorators: [withRemovePadding],
};

const Template = (args: WeeklyCalendarProps) => {
    // eslint-disable-next-line react/destructuring-assignment
    const [weekOffset, setWeekOffset] = useState(args.weekOffset || 0);
    const currentWeek = getWeekByOffset(weekOffset);

    return (
        <WeeklyCalendar
            {...args}
            header={
                <StyledCalendarMonthButton>
                    <IconButton
                        icon="chevron-left"
                        onClick={() => setWeekOffset(weekOffset - 1)}
                    />
                    <div>{getMonthDetails(currentWeek[0])}</div>
                    <IconButton
                        icon="chevron-right"
                        onClick={() => setWeekOffset(weekOffset + 1)}
                    />
                    <Button onClick={() => setWeekOffset(0)}>Today</Button>
                </StyledCalendarMonthButton>
            }
            weekOffset={weekOffset}
        />
    );
};

const defaultArgs: WeeklyCalendarProps = {
    events: [],
    eventRenderer: () => <div>Event</div>,
    shouldShowWeekControls: false,
    header: null,
    weekOffset: 0,
    onWeekChange: () => {},
    defaultScrollHour: 8.5,
    shouldScrollToFirstEvent: true,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
