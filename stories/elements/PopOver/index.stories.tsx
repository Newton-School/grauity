import { StoryFn } from '@storybook/react';
import React from 'react';
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
            <Button ref={triggerRef}>Trigger</Button>
            <PopOver
                {...args}
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
    // minimumOffset: { top: 80, left: 40, right: 40, bottom: 40 },
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
