import { StoryFn } from '@storybook/react';
import React from 'react';
import { CalendarEvent, CalendarEventProps } from 'ui/elements/Calendar';

export default {
    title: 'Elements/Calendar/CalendarEvent',
    component: CalendarEvent,
    // decorators: [
    //     (Story: StoryFn) => (
    //         <div
    //             style={{
    //                 height: '800px',
    //             }}
    //         >
    //             <Story />
    //         </div>
    //     ),
    // ],
};

const Template = (args: CalendarEventProps) => <CalendarEvent {...args} />;

const defaultArgs: CalendarEventProps = {};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
