import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Button from '../Button';
import PopOver from './PopOver';
import { PopOverProps } from './types';

const TestPopOverComponent = (props: PopOverProps) => {
    const triggerRef = React.createRef<HTMLButtonElement>();
    const parentRef = React.createRef<HTMLDivElement>();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <div ref={parentRef}>
            <Button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                Trigger
            </Button>
            <PopOver
                isOpen={isOpen}
                parentRef={parentRef}
                triggerRef={triggerRef}
                onClose={() => setIsOpen(false)}
                {...props}
            >
                <div>PopOver Content</div>
            </PopOver>
        </div>
    );
};

describe('PopOver', () => {
    // Render the PopOver component
    it('should render the PopOver component without parent and trigger', () => {
        render(
            <PopOver isOpen>
                <div>PopOver Content</div>
            </PopOver>
        );
        expect(screen.getByText('PopOver Content')).toBeInTheDocument();
    });
    it('should not render the PopOver component with trigger by default', () => {
        render(<TestPopOverComponent />);
        expect(screen.queryByText('PopOver Content')).not.toBeInTheDocument();
    });

    it('should open the PopOver component when trigger is clicked', async () => {
        render(<TestPopOverComponent />);
        fireEvent.click(screen.getByText('Trigger'));

        await waitFor(() =>
            expect(screen.getByText('PopOver Content')).toBeInTheDocument()
        );
    });

    it('should close the PopOver component when overlay is clicked', async () => {
        render(<TestPopOverComponent />);
        fireEvent.click(screen.getByText('Trigger'));

        await waitFor(() =>
            expect(screen.getByText('PopOver Content')).toBeInTheDocument()
        );

        fireEvent.click(screen.getByTestId('testid-pop-over-wrapper'));

        await waitFor(() =>
            expect(screen.queryByText('PopOver Content')).not.toBeInTheDocument()
        );
    });

    // Open and close the PopOver component
    // it('should open the PopOver component', () => {
    //     render(<TestPopOverComponent />);
    //     fireEvent.click(screen.getByText('Trigger'));
    //     expect(screen.getByText('PopOver Content')).toBeInTheDocument();
    // });
    // it('should close the PopOver component', async () => {
    //     render(<TestPopOverComponent />);
    //     fireEvent.click(screen.getByText('Trigger'));
    //     expect(screen.getByText('PopOver Content')).toBeInTheDocument();
    //     fireEvent.click(screen.getByTestId('testid-pop-over-wrapper'));
    //     await new Promise((r) => setTimeout(r, 3000));
    //     expect(screen.queryByText('PopOver Content')).not.toBeInTheDocument();
    // }, 5000);
});
