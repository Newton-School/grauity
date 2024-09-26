import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Accordion from './Accordion';

describe('Accordion Component', () => {
    it('renders the correct title', () => {
        render(<Accordion title="Test Title">Test Content</Accordion>);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders the correct children', () => {
        render(<Accordion title="Test Title">Test Content</Accordion>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('is collapsed by default', () => {
        render(<Accordion title="Test Title">Test Content</Accordion>);
        expect(screen.queryByText('Test Content')).toHaveStyle('max-height: 0');
    });

    it('is expanded when expanded prop is true', () => {
        render(
            <Accordion title="Test Title" expanded>
                Test Content
            </Accordion>
        );
        expect(screen.getByText('Test Content')).toHaveStyle(
            'max-height: 1000px'
        );
    });

    it('toggles expanded state when clicked', () => {
        render(<Accordion title="Test Title">Test Content</Accordion>);
        const titleElement = screen.getByText('Test Title');
        fireEvent.click(titleElement);
        expect(screen.getByText('Test Content')).toHaveStyle(
            'max-height: 1000px'
        );
        fireEvent.click(titleElement);
        expect(screen.queryByText('Test Content')).toHaveStyle('max-height: 0');
    });

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
