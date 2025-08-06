import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Tab from '../Tab';
import TabList from './TabList';

describe('TabList', () => {
    const mockOnChange = jest.fn();

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    const defaultChildren = [
        <Tab key="tab1" id="tab1">
            Tab 1
        </Tab>,
        <Tab key="tab2" id="tab2">
            Tab 2
        </Tab>,
        <Tab key="tab3" id="tab3">
            Tab 3
        </Tab>,
    ];

    describe('Basic Rendering', () => {
        it('renders with default props', () => {
            render(<TabList>{defaultChildren}</TabList>);

            const tablist = screen.getByRole('tablist');
            expect(tablist).toBeInTheDocument();
            expect(tablist).toHaveAttribute('aria-label', 'Tab list');
        });

        it('renders with custom aria-label', () => {
            const customAriaLabel = 'Custom tab navigation';
            render(
                <TabList ariaLabel={customAriaLabel}>{defaultChildren}</TabList>
            );

            const tablist = screen.getByRole('tablist');
            expect(tablist).toHaveAttribute('aria-label', customAriaLabel);
        });

        it('renders with custom className', () => {
            const customClassName = 'custom-tab-list';
            render(
                <TabList className={customClassName}>{defaultChildren}</TabList>
            );

            const tablist = screen.getByRole('tablist');
            expect(tablist).toHaveClass(customClassName);
        });

        it('renders all children as tabs', () => {
            render(<TabList>{defaultChildren}</TabList>);

            const tabs = screen.getAllByRole('tab');
            expect(tabs).toHaveLength(3);
            expect(tabs[0]).toHaveTextContent('Tab 1');
            expect(tabs[1]).toHaveTextContent('Tab 2');
            expect(tabs[2]).toHaveTextContent('Tab 3');
        });

        it('renders without children', () => {
            render(<TabList />);

            const tablist = screen.getByRole('tablist');
            expect(tablist).toBeInTheDocument();
            expect(screen.queryAllByRole('tab')).toHaveLength(0);
        });
    });

    describe('Active State Management', () => {
        it('sets first tab as active by default', () => {
            render(<TabList>{defaultChildren}</TabList>);

            const tabs = screen.getAllByRole('tab');
            expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
            expect(tabs[0]).toHaveAttribute('tabindex', '0');
            expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
            expect(tabs[1]).toHaveAttribute('tabindex', '-1');
            expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
            expect(tabs[2]).toHaveAttribute('tabindex', '-1');
        });

        it('sets specified tab as active with activeIndex prop', () => {
            render(<TabList activeIndex={1}>{defaultChildren}</TabList>);

            const tabs = screen.getAllByRole('tab');
            expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
            expect(tabs[0]).toHaveAttribute('tabindex', '-1');
            expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
            expect(tabs[1]).toHaveAttribute('tabindex', '0');
            expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
            expect(tabs[2]).toHaveAttribute('tabindex', '-1');
        });

        it('handles activeIndex greater than number of children', () => {
            render(<TabList activeIndex={5}>{defaultChildren}</TabList>);

            const tabs = screen.getAllByRole('tab');
            expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
            expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
            expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
        });
    });

    describe('Click Interactions', () => {
        it('calls onChange when tab is clicked', () => {
            render(
                <TabList onChange={mockOnChange}>{defaultChildren}</TabList>
            );
            const tabs = screen.getAllByRole('tab');
            fireEvent.click(tabs[1]);
            expect(mockOnChange).toHaveBeenCalledWith(1);
        });

        it('calls onChange with correct index for each tab', () => {
            render(
                <TabList onChange={mockOnChange}>{defaultChildren}</TabList>
            );

            const tabs = screen.getAllByRole('tab');

            fireEvent.click(tabs[0]);
            expect(mockOnChange).toHaveBeenCalledWith(0);

            fireEvent.click(tabs[2]);
            expect(mockOnChange).toHaveBeenCalledWith(2);
        });

        it('does not call onChange when no callback provided', () => {
            // Should not throw error when onChange is not provided
            expect(() => {
                render(<TabList>{defaultChildren}</TabList>);
                const tabs = screen.getAllByRole('tab');
                fireEvent.click(tabs[1]);
            }).not.toThrow();
        });
    });

    describe('Keyboard Navigation', () => {
        it('moves to next tab on Arrow Right key', () => {
            render(
                <TabList activeIndex={0} onChange={mockOnChange}>
                    {defaultChildren}
                </TabList>
            );

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'ArrowRight' });

            expect(mockOnChange).toHaveBeenCalledWith(1);
        });

        it('moves to previous tab on Arrow Left key', () => {
            render(
                <TabList activeIndex={1} onChange={mockOnChange}>
                    {defaultChildren}
                </TabList>
            );

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'ArrowLeft' });

            expect(mockOnChange).toHaveBeenCalledWith(0);
        });

        it('wraps to first tab when pressing Arrow Right on last tab', () => {
            render(
                <TabList activeIndex={2} onChange={mockOnChange}>
                    {defaultChildren}
                </TabList>
            );

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'ArrowRight' });

            expect(mockOnChange).toHaveBeenCalledWith(0);
        });

        it('wraps to last tab when pressing Arrow Left on first tab', () => {
            render(
                <TabList activeIndex={0} onChange={mockOnChange}>
                    {defaultChildren}
                </TabList>
            );

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'ArrowLeft' });

            expect(mockOnChange).toHaveBeenCalledWith(2);
        });

        it('ignores other keys', () => {
            render(
                <TabList activeIndex={0} onChange={mockOnChange}>
                    {defaultChildren}
                </TabList>
            );

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'Enter' });
            fireEvent.keyDown(tablist, { key: 'Space' });
            fireEvent.keyDown(tablist, { key: 'Tab' });

            expect(mockOnChange).not.toHaveBeenCalled();
        });

        it('handles keyboard navigation with single tab', () => {
            render(
                <TabList activeIndex={0} onChange={mockOnChange}>
                    <Tab id="single">Single Tab</Tab>
                </TabList>
            );

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'ArrowRight' });
            fireEvent.keyDown(tablist, { key: 'ArrowLeft' });

            // Should stay on the same tab (index 0)
            expect(mockOnChange).toHaveBeenCalledWith(0);
            expect(mockOnChange).toHaveBeenCalledTimes(2);
        });
    });

    describe('Variants', () => {
        it('renders with border variant by default', () => {
            render(<TabList>{defaultChildren}</TabList>);

            const tablist = screen.getByRole('tablist');
            expect(tablist).toBeInTheDocument();
        });

        it('renders with border variant explicitly set', () => {
            render(<TabList variant="border">{defaultChildren}</TabList>);

            const tablist = screen.getByRole('tablist');
            expect(tablist).toBeInTheDocument();

            // Should render the indicator for border variant
            const indicator = tablist.querySelector('.tab-indicator');
            expect(indicator).toBeInTheDocument();
        });

        it('renders with rounded variant', () => {
            render(<TabList variant="rounded">{defaultChildren}</TabList>);

            const tablist = screen.getByRole('tablist');
            expect(tablist).toBeInTheDocument();

            // Should not render the indicator for rounded variant
            const indicator = tablist.querySelector('.tab-indicator');
            expect(indicator).not.toBeInTheDocument();
        });
    });

    describe('Size Prop', () => {
        it('passes size prop to child tabs', () => {
            render(<TabList size="large">{defaultChildren}</TabList>);

            const tabs = screen.getAllByRole('tab');
            // Verify tabs are rendered (size will be applied via styled-components)
            expect(tabs).toHaveLength(3);
        });

        it('uses medium size by default', () => {
            render(<TabList>{defaultChildren}</TabList>);

            const tabs = screen.getAllByRole('tab');
            expect(tabs).toHaveLength(3);
        });
    });

    describe('Active Indicator', () => {
        it('renders indicator only for border variant', () => {
            const { rerender } = render(
                <TabList variant="border">{defaultChildren}</TabList>
            );

            let tablist = screen.getByRole('tablist');
            let indicator = tablist.querySelector('.tab-indicator');
            expect(indicator).toBeInTheDocument();

            rerender(<TabList variant="rounded">{defaultChildren}</TabList>);

            tablist = screen.getByRole('tablist');
            indicator = tablist.querySelector('.tab-indicator');
            expect(indicator).not.toBeInTheDocument();
        });
    });

    describe('Tab Props Inheritance', () => {
        it('passes variant prop to child tabs', () => {
            render(
                <TabList variant="rounded">
                    <Tab id="test">Test Tab</Tab>
                </TabList>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });

        it('preserves existing props on child tabs', () => {
            render(
                <TabList>
                    <Tab id="test" icon="check" subText="Custom">
                        Test Tab
                    </Tab>
                </TabList>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveTextContent('Test Tab');
            expect(tab).toHaveTextContent('Custom');
        });
    });

    describe('Accessibility', () => {
        it('has proper ARIA attributes', () => {
            render(<TabList>{defaultChildren}</TabList>);

            const tablist = screen.getByRole('tablist');
            expect(tablist).toHaveAttribute('role', 'tablist');
            expect(tablist).toHaveAttribute('tabindex', '0');
        });

        it('maintains focus management', () => {
            render(<TabList>{defaultChildren}</TabList>);

            const tabs = screen.getAllByRole('tab');
            expect(tabs[0]).toHaveAttribute('tabindex', '0');
            expect(tabs[1]).toHaveAttribute('tabindex', '-1');
            expect(tabs[2]).toHaveAttribute('tabindex', '-1');
        });
    });

    describe('Edge Cases', () => {
        it('handles empty children array', () => {
            render(<TabList>{[]}</TabList>);

            const tablist = screen.getByRole('tablist');
            expect(tablist).toBeInTheDocument();
            expect(screen.queryAllByRole('tab')).toHaveLength(0);
        });

        it('handles non-Tab children gracefully', () => {
            render(
                <TabList>
                    <Tab id="tab1">Tab 1</Tab>
                    <div>Non-tab content</div>
                    <Tab id="tab2">Tab 2</Tab>
                </TabList>
            );

            const tabs = screen.getAllByRole('tab');
            expect(tabs).toHaveLength(2);
            expect(screen.getByText('Non-tab content')).toBeInTheDocument();
        });

        it('handles keyboard navigation with no tabs', () => {
            render(<TabList onChange={mockOnChange} />);

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'ArrowRight' });
            fireEvent.keyDown(tablist, { key: 'ArrowLeft' });

            // Should not call onChange when there are no tabs
            expect(mockOnChange).not.toHaveBeenCalled();
        });
    });
});
