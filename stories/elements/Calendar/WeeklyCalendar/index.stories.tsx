import { StoryFn } from '@storybook/react';
import React from 'react';
import WeeklyCalendar, { WeeklyCalendarProps } from 'ui/elements/Calendar';

export default {
    title: 'Elements/Calendar/WeeklyCalendar',
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

const Template = (args: WeeklyCalendarProps) => <WeeklyCalendar {...args} />;

const defaultArgs: WeeklyCalendarProps = {
    events: [],
    eventRenderer: () => <div>Event</div>,
    shouldShowWeekControls: true,
    weekOffset: 0,
    onWeekChange: () => {},
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
