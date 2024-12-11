import { StoryFn } from '@storybook/react';
import React from 'react';
import { MonthlyCalendarEvent, MonthlyCalendarEventProps } from 'ui/elements/Calendar';

export default {
    title: 'Elements/Calendar/MonthlyCalendarEvent',
    component: MonthlyCalendarEvent,
    decorators: [
        (Story: StoryFn) => (
            <div
                style={{
                    width: '150px',
                    height: '16px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template = (args: MonthlyCalendarEventProps) => <MonthlyCalendarEvent {...args} />;

const defaultArgs: MonthlyCalendarEventProps = {
    eventTime: new Date(2024, 9, 25, 8, 0),
    eventTitle  : 'PSP A - Lab 2 asdhasd asguydguhas guyasdgyuas gusyadgyas',
    eventTitleColor: '#FFFFFF',
    eventTimeColor: '#FFFFFFCC',
    backgroundColor: '#0673F9',
    borderRadius: '4px',
    width: '100%',
    height: '100%',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
