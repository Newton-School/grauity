import React, { useState } from 'react';
import Button from 'ui/elements/Button';
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
        side={'right'}
        fullScreen={false}
        closeOnBackdropClick={true}
        title={'Drawer Title'}
        subtitle={'Drawer Subtitle'}
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
    title: 'Drawer Title',
    subtitle: 'Drawer Subtitle',
    className: 'drawer',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
