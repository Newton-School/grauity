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
    // Rendering
    it('does not render initially', () => {
        render(<TestDrawer />);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders on pressing the button', () => {
        render(<TestDrawer />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('renders with custom width', () => {
        render(<TestDrawer width="50%" />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('dialog')).toHaveStyle('width: 50%');
    });

    it('renders from left side', () => {
        render(<TestDrawer position="left" />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('dialog')).toHaveStyle('left: 0');
    });

    it('renders from right side', () => {
        render(<TestDrawer position="right" />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('dialog')).toHaveStyle('right: 0');
    });

    it('renders in fullscreen mode', () => {
        render(<TestDrawer fullScreen />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('dialog')).toHaveStyle('width: 100vw');
    });

    it('closes on backdrop click when enabled', () => {
        render(<TestDrawer closeOnBackdropClick />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();

        const overlay = screen.getByTestId('testid-drawer-wrapper');
        fireEvent.click(overlay);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('does not close on backdrop click when disabled', () => {
        render(<TestDrawer closeOnBackdropClick={false} />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();

        const overlay = screen.getByTestId('testid-drawer-wrapper');
        fireEvent.click(overlay);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('renders content correctly', () => {
        render(<TestDrawer />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByText('Drawer Content')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        render(<TestDrawer className="custom-drawer" />);
        fireEvent.click(screen.getByText('Open Drawer'));
        const overlay = screen.getByTestId('testid-drawer-wrapper');
        expect(overlay).toHaveClass('custom-drawer');
    });
});
