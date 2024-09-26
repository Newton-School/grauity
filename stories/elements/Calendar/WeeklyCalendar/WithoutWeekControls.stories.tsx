import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Button, { IconButton } from 'ui/elements/Button';
import WeeklyCalendar, { WeeklyCalendarProps } from 'ui/elements/Calendar';
import { getMonthDetails, getWeekByOffset } from 'ui/elements/Calendar/utils';
import { StyledCalendarMonthButton } from 'ui/elements/Calendar/WeeklyCalendar.styles';

export default {
    title: 'Elements/Calendar/WeeklyCalendarWithoutWeekControls',
    component: WeeklyCalendar,
    decorators: [
        (Story: StoryFn) => (
            <div
                style={{
                    height: '800px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template = (args: WeeklyCalendarProps) => {
    // eslint-disable-next-line react/destructuring-assignment
    const [weekOffset, setWeekOffset] = useState(args.weekOffset || 0);
    const currentWeek = getWeekByOffset(weekOffset);

    return (
        <>
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
            <WeeklyCalendar {...args} weekOffset={weekOffset} />
        </>
    );
};

const defaultArgs: WeeklyCalendarProps = {
    events: [],
    eventRenderer: () => <div>Event</div>,
    shouldShowWeekControls: false,
    weekOffset: 0,
    onWeekChange: () => {},
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
