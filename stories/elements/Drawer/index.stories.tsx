import React, { useState } from 'react';
import Button, { IconButton } from 'ui/elements/Button';
import Drawer, { DrawerProps } from 'ui/elements/Drawer';

export default {
    title: 'Elements/Drawer',
    component: Drawer,
    parameters: {
        docs: {
            source: {
                code: `
<div>
    <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
    <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        fullScreen={false}
        closeOnBackdropClick={true}
        width={'30%'}
        side={'left'}
        shouldDisableScroll{true}
        shouldFocusOnFirstElement{true}
    >
        Drawer Content Here!!!
    </Drawer>
</div>
            `,
            },
        },
    },
};

const Template = (args: DrawerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
            <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div style={{ padding: '2px 12px' }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <span>These are my tasks for next week:</span>
                        <IconButton
                            icon="close"
                            variant="secondary"
                            color="neutral"
                            size="small"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                    <ul>
                        {Array.from({ length: 30 }).map((_, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <li key={index}>Task {index + 1}</li>
                        ))}
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

const defaultArgs: DrawerProps = {
    isOpen: false,
    onClose: () => {},
    fullScreen: false,
    closeOnBackdropClick: true,
    width: '30%',
    side: 'left',
    shouldDisableScroll: true,
    shouldFocusOnFirstElement: true,
    className: 'drawer',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
