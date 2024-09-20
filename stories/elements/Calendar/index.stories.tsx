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
                    border: '1px solid var(--border-neutral',
                    height: '600px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template = (args: WeeklyCalendarProps) => <WeeklyCalendar {...args} />;

const defaultArgs: WeeklyCalendarProps = {};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
