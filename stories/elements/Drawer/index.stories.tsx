import React, { useState } from 'react';
import Drawer, { DrawerProps } from 'ui/elements/Drawer';
import Button from 'ui/elements/Button';

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
        side={'right'}
        fullScreen={false}
        closeOnBackdropClick={true}
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
                <div style={{ padding: '12px' }}>Drawer Content Here!!!</div>
            </Drawer>
        </div>
    );
};

const defaultArgs: DrawerProps = {
    isOpen: false,
    onClose: () => {},
    side: 'right',
    fullScreen: false,
    closeOnBackdropClick: true,
    width: '400px',
    height: '50%',
    showCloseButton: true,
    shouldDisableScroll: true,
    shouldFocusOnFirstElement: true,
    className: 'drawer',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
