import { StoryFn } from '@storybook/react';
import React from 'react';
import { CalendarEvent, CalendarEventProps } from 'ui/elements/Calendar';

export default {
    title: 'Elements/Calendar/CalendarEvent',
    component: CalendarEvent,
    decorators: [
        (Story: StoryFn) => (
            <div
                style={{
                    width: '150px',
                    height: '90px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template = (args: CalendarEventProps) => <CalendarEvent {...args} />;

const defaultArgs: CalendarEventProps = {
    title: 'Event Title',
    chipContent: '123',
    start: new Date(),
    end: new Date(),
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
