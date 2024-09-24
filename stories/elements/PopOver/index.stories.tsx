import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Button from 'ui/elements/Button';
import PopOver, { PopOverProps } from 'ui/elements/PopOver';

export default {
    title: 'Elements/PopOver',
    component: PopOver,
    // decorators: [
    //     (Story: StoryFn) => (
    //         <div style={{ width: '100%', height: '400px' }}>
    //             <Story />
    //         </div>
    //     ),
    // ],
};

const Template = (args: PopOverProps) => {
    const parentRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                width: '700px',
                height: '700px',
                border: '2px solid green',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
            }}
            ref={parentRef}
        >
            <Button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                Trigger
            </Button>
            <PopOver
                {...args}
                isOpen={isOpen}
                triggerRef={
                    triggerRef as any as React.MutableRefObject<HTMLDivElement>
                }
                parentRef={parentRef}
            >
                <div style={{ width: '400px', height: '200px' }}>
                    <p>This is some popover content.</p>
                    <p>This component is for demonstration purpose only.</p>
                </div>
            </PopOver>
        </div>
    );
};

const defaultArgs: PopOverProps = {
    direction: 'bottom',
    autoAdjust: true,
    minimumOffset: { top: 0, left: 0, right: 0, bottom: 350 },
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
