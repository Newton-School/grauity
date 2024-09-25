import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { CalendarEvent, CalendarEventProps } from 'ui/elements/Calendar';
import PopOver from 'ui/elements/PopOver';

export default {
    title: 'Elements/Calendar/CalendarEventWithPopOver',
    component: CalendarEvent,
    decorators: [
        (Story: StoryFn) => (
            <div
                style={{
                    width: '100%',
                    height: '600px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '150px',
                        height: '90px',
                    }}
                >
                    <Story />
                </div>
            </div>
        ),
    ],
};

const Template = (args: CalendarEventProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = React.useRef<HTMLDivElement>(null);

    return (
        <>
            <CalendarEvent
                {...args}
                onClick={() => setIsOpen(true)}
                focused={isOpen}
                ref={triggerRef}
            />
            <PopOver
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                triggerRef={triggerRef}
                direction="left"
                shouldCloseOnOutsideClick
            >
                <div
                    style={{
                        width: '300px',
                        height: '200px',
                        color: 'var(--text-primary)',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-neutral)',
                    }}
                >
                    Event Details
                </div>
            </PopOver>
        </>
    );
};

const defaultArgs: CalendarEventProps = {
    title: 'Event Title',
    chipContent: '123',
    start: new Date(2024, 9, 25, 10, 0),
    end: new Date(2024, 9, 25, 12, 0),
    onClick: () => {},
    focused: false,
    minDurationToDisplayTime: 1 * 60 * 60 * 1000,
    textColor: null,
    backgroundColor: null,
    borderColor: null,
    chipTextColor: null,
    chipBackgroundColor: null,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
