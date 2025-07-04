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

    it('renders title and subtitle when provided', () => {
        const title = 'Drawer Title';
        const subtitle = 'Drawer Subtitle';
        render(<TestDrawer title={title} subtitle={subtitle} />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(subtitle)).toBeInTheDocument();
    });

    it('closes when the close button is clicked', () => {
        render(<TestDrawer showCloseButton />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        // button has aria-label "Close"
        fireEvent.click(screen.getByLabelText('Close'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('calls onClose when the close button is clicked', () => {
        const onClose = jest.fn();
        render(<TestDrawer showCloseButton onClose={onClose} />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        fireEvent.click(screen.getByLabelText('Close'));
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('closes when the backdrop is clicked', () => {
        render(<TestDrawer closeOnBackdropClick />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('testid-drawer-wrapper'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    
    it('does not close when the backdrop is clicked and closeOnBackdropClick is false', () => {
        render(<TestDrawer closeOnBackdropClick={false} />);
        fireEvent.click(screen.getByText('Open Drawer'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('testid-drawer-wrapper'));
        expect(screen.queryByRole('dialog')).toBeInTheDocument();
    });
    
    it('applies custom className', () => {
        const className = 'custom-drawer';
        render(<TestDrawer className={className} />);
        fireEvent.click(screen.getByText('Open Drawer'));
        const drawer = screen.getByRole('dialog');
        expect(drawer).toHaveClass(className);
    });

    it('renders full screen when fullScreen prop is true', () => {
        render(<TestDrawer fullScreen />);
        fireEvent.click(screen.getByText('Open Drawer'));
        const drawer = screen.getByRole('dialog');
        expect(drawer).toHaveStyle('width: 100vw');
        expect(drawer).toHaveStyle('height: 100vh');
    });

    it('renders from the left side when side prop is "left"', () => {
        render(<TestDrawer side="left" />);
        fireEvent.click(screen.getByText('Open Drawer'));
        const drawer = screen.getByRole('dialog');
        expect(drawer).toHaveStyle('left: 0');
    });
});
