import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Tab from './Tab';

describe('Tab', () => {
    it('renders children', () => {
        render(<Tab>Tab Content</Tab>);
        expect(screen.getByText('Tab Content')).toBeInTheDocument();
    });

    it('renders subText as string', () => {
        render(<Tab subText="Subtext">Tab</Tab>);
        expect(screen.getByText('Subtext')).toBeInTheDocument();
    });

    it('renders subText as ReactNode', () => {
        render(<Tab subText={<span>NodeSubtext</span>}>Tab</Tab>);
        expect(screen.getByText('NodeSubtext')).toBeInTheDocument();
    });

    it('renders icon when icon prop is provided', () => {
        render(<Tab icon="label">Tab</Tab>);
        expect(screen.getByRole('tab').querySelector('i')).toBeTruthy();
    });

    it('uses default iconSize when not provided', () => {
        render(<Tab icon="label">Tab</Tab>);
        const icon = screen.getByRole('tab').querySelector('i');
        expect(icon?.getAttribute('size')).toContain('20');
    });

    it('calls onClick when not disabled', () => {
        const onClick = jest.fn();
        render(<Tab onClick={onClick}>Tab</Tab>);
        fireEvent.click(screen.getByRole('tab'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
        const onClick = jest.fn();
        render(
            <Tab onClick={onClick} disabled>
                Tab
            </Tab>
        );
        fireEvent.click(screen.getByRole('tab'));
        expect(onClick).not.toHaveBeenCalled();
    });

    it('applies className and style', () => {
        render(
            <Tab className="custom-class" style={{ color: 'red' }}>
                Tab
            </Tab>
        );
        const tab = screen.getByRole('tab');
        expect(tab).toHaveClass('custom-class');
        expect(tab).toHaveStyle('color: red');
    });

    it('sets aria-selected, aria-controls, id, tabIndex, and disabled attributes', () => {
        render(
            <Tab
                isActive
                ariaControls="tabpanel-1"
                id="tab-1"
                tabIndex={0}
                disabled
            >
                Tab
            </Tab>
        );
        const tab = screen.getByRole('tab');
        expect(tab).toHaveAttribute('aria-selected', 'true');
        expect(tab).toHaveAttribute('aria-controls', 'tabpanel-1');
        expect(tab).toHaveAttribute('id', 'tab-1');
        expect(tab).toHaveAttribute('tabIndex', '0');
        expect(tab).toBeDisabled();
    });

    it('renders icon', () => {
        render(
            <Tab icon="label" iconPosition="left">
                Tab
            </Tab>
        );
        const icon = screen.getByRole('tab').querySelector('i');
        expect(icon).toBeTruthy();
    });

    it('applies correct flexDirection for each iconPosition', () => {
        const { rerender } = render(
            <Tab icon="label" iconPosition="left">
                Tab
            </Tab>
        );
        let tab = screen.getByRole('tab');
        expect(window.getComputedStyle(tab).flexDirection).toBe('row');

        rerender(
            <Tab icon="label" iconPosition="right">
                Tab
            </Tab>
        );
        tab = screen.getByRole('tab');
        expect(window.getComputedStyle(tab).flexDirection).toBe('row-reverse');

        rerender(
            <Tab icon="label" iconPosition="top">
                Tab
            </Tab>
        );
        tab = screen.getByRole('tab');
        expect(window.getComputedStyle(tab).flexDirection).toBe('column');

        rerender(
            <Tab icon="label" iconPosition="bottom">
                Tab
            </Tab>
        );
        tab = screen.getByRole('tab');
        expect(window.getComputedStyle(tab).flexDirection).toBe(
            'column-reverse'
        );
    });

    it('applies correct borderRadius for each variant', () => {
        const { rerender } = render(<Tab variant="rounded">Tab</Tab>);
        let tab = screen.getByRole('tab');
        expect(window.getComputedStyle(tab).borderRadius).toBe(
            'var(--corner-radius-cr-3, 4px)'
        );

        rerender(<Tab variant="bordered">Tab</Tab>);
        tab = screen.getByRole('tab');
        expect(window.getComputedStyle(tab).borderRadius).toBe(
            'var(--corner-radius-0px, 0px)'
        );
    });
});
