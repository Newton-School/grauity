import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Tabs from './Tabs';
import { TabsProps } from './types';

const defaultProps: TabsProps = {
    tabItems: ['Item1', 'Item2'],
    onTabFocusChange: jest.fn(),
};

const threeTabs = ['One', 'Two', 'Three'];

describe('Tabs Component', () => {
    it('renders without crashing', () => {
        render(<Tabs tabItems={['Item1', 'Item2']} />);
        expect(screen.getByText('Item1')).toBeInTheDocument();
        expect(screen.getByText('Item2')).toBeInTheDocument();
    });

    it('click on non active tab triggers onTabItemClick', async () => {
        render(<Tabs {...defaultProps} />);
        fireEvent.click(screen.getByText('Item2'));
        await waitFor(() => {
            expect(defaultProps.onTabFocusChange).toHaveBeenCalledWith(1);
        });
    });

    it('renders custom children', () => {
        render(<Tabs tabItems={[<h1>Text 1</h1>, <span>Text 2</span>]} />);
        expect(screen.getByText('Text 1')).toBeInTheDocument();
        expect(screen.getByText('Text 2')).toBeInTheDocument();
    });

    it('applies custom class name', () => {
        render(<Tabs tabItems={['Item1', 'Item2']} className="custom-class" />);
        const tablist = screen.getByRole('tablist');
        expect(tablist).toHaveClass('custom-class');
    });
});

describe('Tabs Component - accessibility', () => {
    it('renders each item as a tab with a roving tabIndex', () => {
        render(<Tabs tabItems={['Item1', 'Item2']} />);

        const tabs = screen.getAllByRole('tab');
        expect(tabs).toHaveLength(2);
        expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
        expect(tabs[0]).toHaveAttribute('tabIndex', '0');
        expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
        expect(tabs[1]).toHaveAttribute('tabIndex', '-1');
    });

    it('honours initialActiveTab for selection and the tab stop', () => {
        render(<Tabs tabItems={threeTabs} initialActiveTab={1} />);

        const tabs = screen.getAllByRole('tab');
        expect(tabs[0]).toHaveAttribute('tabIndex', '-1');
        expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
        expect(tabs[1]).toHaveAttribute('tabIndex', '0');
        expect(tabs[2]).toHaveAttribute('tabIndex', '-1');
    });

    it('keeps a tab reachable when initialActiveTab is out of range', () => {
        render(<Tabs tabItems={threeTabs} initialActiveTab={-1} />);

        const tabs = screen.getAllByRole('tab');
        // No tab is selected, but the first stays keyboard-tabbable (no trap).
        expect(tabs[0]).toHaveAttribute('tabIndex', '0');
        expect(tabs[1]).toHaveAttribute('tabIndex', '-1');
        expect(tabs[2]).toHaveAttribute('tabIndex', '-1');

        const tablist = screen.getByRole('tablist');
        tabs[0].focus();
        fireEvent.keyDown(tablist, { key: 'ArrowRight' });
        expect(tabs[1]).toHaveFocus();
    });

    it('labels the tablist (default) and accepts a custom ariaLabel', () => {
        const { rerender } = render(<Tabs tabItems={['Item1', 'Item2']} />);
        expect(screen.getByRole('tablist')).toHaveAttribute(
            'aria-label',
            'Tab list'
        );

        rerender(<Tabs tabItems={['Item1', 'Item2']} ariaLabel="Views" />);
        expect(screen.getByRole('tablist')).toHaveAttribute(
            'aria-label',
            'Views'
        );
    });
});

describe('Tabs Component - keyboard navigation', () => {
    it('ArrowRight moves focus to the next tab', () => {
        render(<Tabs tabItems={threeTabs} />);

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        tabs[0].focus();
        fireEvent.keyDown(tablist, { key: 'ArrowRight' });

        expect(tabs[1]).toHaveFocus();
    });

    it('ArrowLeft moves focus to the previous tab', () => {
        render(<Tabs tabItems={threeTabs} initialActiveTab={1} />);

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        tabs[1].focus();
        fireEvent.keyDown(tablist, { key: 'ArrowLeft' });

        expect(tabs[0]).toHaveFocus();
    });

    it('ArrowRight wraps from the last tab to the first', () => {
        render(<Tabs tabItems={threeTabs} initialActiveTab={2} />);

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        tabs[2].focus();
        fireEvent.keyDown(tablist, { key: 'ArrowRight' });

        expect(tabs[0]).toHaveFocus();
    });

    it('ArrowLeft wraps from the first tab to the last', () => {
        render(<Tabs tabItems={threeTabs} />);

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        tabs[0].focus();
        fireEvent.keyDown(tablist, { key: 'ArrowLeft' });

        expect(tabs[2]).toHaveFocus();
    });

    it('Home focuses the first tab and End the last', () => {
        render(<Tabs tabItems={threeTabs} initialActiveTab={1} />);

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        tabs[1].focus();
        fireEvent.keyDown(tablist, { key: 'End' });
        expect(tabs[2]).toHaveFocus();

        fireEvent.keyDown(tablist, { key: 'Home' });
        expect(tabs[0]).toHaveFocus();
    });

    it('does not change selection while only moving focus (manual activation)', () => {
        const onTabFocusChange = jest.fn();
        render(
            <Tabs tabItems={threeTabs} onTabFocusChange={onTabFocusChange} />
        );

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        // Mount fires once with the initial index (0).
        expect(onTabFocusChange).toHaveBeenCalledTimes(1);
        expect(onTabFocusChange).toHaveBeenLastCalledWith(0);

        tabs[0].focus();
        fireEvent.keyDown(tablist, { key: 'ArrowRight' });

        // Focus moved but selection did not commit.
        expect(tabs[1]).toHaveFocus();
        expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
        expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
        expect(onTabFocusChange).toHaveBeenCalledTimes(1);
    });

    it('Enter commits the focused tab', () => {
        const onTabFocusChange = jest.fn();
        render(
            <Tabs tabItems={threeTabs} onTabFocusChange={onTabFocusChange} />
        );

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        tabs[0].focus();
        fireEvent.keyDown(tablist, { key: 'ArrowRight' });
        fireEvent.keyDown(tablist, { key: 'Enter' });

        expect(onTabFocusChange).toHaveBeenLastCalledWith(1);
        expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
        expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
    });

    it('Space commits the focused tab', () => {
        const onTabFocusChange = jest.fn();
        render(
            <Tabs tabItems={threeTabs} onTabFocusChange={onTabFocusChange} />
        );

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        tabs[0].focus();
        fireEvent.keyDown(tablist, { key: 'End' });
        fireEvent.keyDown(tablist, { key: ' ' });

        expect(onTabFocusChange).toHaveBeenLastCalledWith(2);
        expect(tabs[2]).toHaveAttribute('aria-selected', 'true');
    });
});
