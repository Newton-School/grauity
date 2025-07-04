import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Button from '../Button';
import Drawer from './Drawer';
import { DrawerProps } from './types';

const TestDrawer = (props: DrawerProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} {...props}>
                <div>Drawer Content</div>
            </Drawer>
        </div>
    );
};

describe('Drawer Component', () => {
    it('does not render initially', () => {
        render(<TestDrawer />);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders on pressing the button', () => {
        render(<TestDrawer />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('closes when the close button is clicked', () => {
        render(<TestDrawer showCloseButton />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        // button has aria-label "Close"
        fireEvent.click(screen.getByLabelText('Close'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});
