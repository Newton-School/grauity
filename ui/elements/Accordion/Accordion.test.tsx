import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Accordion from './Accordion';

describe('Accordion Component', () => {
    it('renders the correct title', () => {
        render(<Accordion title="Test Title">Test Content</Accordion>);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders the correct children when expanded is true', () => {
        render(
            <Accordion title="Test Title" expanded>
                Test Content
            </Accordion>
        );
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
    it('renders the correct children when expanded is false', async () => {
        render(<Accordion title="Test Title">Test Content</Accordion>);
        await waitFor(()=>{
            expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
        });
    });

    it('toggles expanded state when clicked', async () => {
        render(<Accordion title="Test Title">Test Content</Accordion>);
        const titleElement = screen.getByText('Test Title');
        fireEvent.click(titleElement);
        await waitFor(()=>{
            expect(screen.getByText('Test Content')).toBeInTheDocument();
        });
        fireEvent.click(titleElement);
        // await new Promise((r) => setTimeout(r, 3000));
        await waitFor(()=>{
            expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
        });
    }, 5000);

    it('calls onToggle when expanded state changes', () => {
        const handleToggle = jest.fn();
        render(
            <Accordion title="Test Title" onToggle={handleToggle}>
                Test Content
            </Accordion>
        );
        const titleElement = screen.getByText('Test Title');
        fireEvent.click(titleElement);
        expect(handleToggle).toHaveBeenCalledWith(true);
        fireEvent.click(titleElement);
        expect(handleToggle).toHaveBeenCalledWith(false);
    });
});
