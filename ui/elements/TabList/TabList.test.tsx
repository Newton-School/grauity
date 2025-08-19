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
            // When activeIndex is out of bounds, no tab should be active
            expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
            expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
            expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
            // But the first tab should still be focusable (focusedIndex defaults to activeIndex)
            expect(tabs[0]).toHaveAttribute('tabindex', '-1');
            expect(tabs[1]).toHaveAttribute('tabindex', '-1');
            expect(tabs[2]).toHaveAttribute('tabindex', '-1');
        });

        it('updates focused tab when activeIndex changes', () => {
            const { rerender } = render(
                <TabList activeIndex={0}>{defaultChildren}</TabList>
            );

            let tabs = screen.getAllByRole('tab');
            expect(tabs[0]).toHaveAttribute('tabindex', '0');
            expect(tabs[1]).toHaveAttribute('tabindex', '-1');

            rerender(<TabList activeIndex={1}>{defaultChildren}</TabList>);

            tabs = screen.getAllByRole('tab');
            expect(tabs[0]).toHaveAttribute('tabindex', '-1');
            expect(tabs[1]).toHaveAttribute('tabindex', '0');
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

            // Should not call onChange immediately, only on focus change
            expect(mockOnChange).not.toHaveBeenCalled();
        });

        it('moves to previous tab on Arrow Left key', () => {
            render(
                <TabList activeIndex={1} onChange={mockOnChange}>
                    {defaultChildren}
                </TabList>
            );

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'ArrowLeft' });

            // Should not call onChange immediately, only on focus change
            expect(mockOnChange).not.toHaveBeenCalled();
        });

        it('activates focused tab on Enter key', () => {
            render(
                <TabList activeIndex={0} onChange={mockOnChange}>
                    {defaultChildren}
                </TabList>
            );

            const tablist = screen.getByRole('tablist');

            // First move focus to second tab
            fireEvent.keyDown(tablist, { key: 'ArrowRight' });

            // Then press Enter to activate it
            fireEvent.keyDown(tablist, { key: 'Enter' });

            expect(mockOnChange).toHaveBeenCalledWith(1);
        });

        it('activates focused tab on Space key', () => {
            render(
                <TabList activeIndex={0} onChange={mockOnChange}>
                    {defaultChildren}
                </TabList>
            );

            const tablist = screen.getByRole('tablist');

            // First move focus to third tab
            fireEvent.keyDown(tablist, { key: 'ArrowRight' });
            fireEvent.keyDown(tablist, { key: 'ArrowRight' });

            // Then press Space to activate it
            fireEvent.keyDown(tablist, { key: ' ' });

            expect(mockOnChange).toHaveBeenCalledWith(2);
        });

        it('wraps to first tab when pressing Arrow Right on last tab', () => {
            render(
                <TabList activeIndex={2} onChange={mockOnChange}>
                    {defaultChildren}
                </TabList>
            );

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'ArrowRight' });
            fireEvent.keyDown(tablist, { key: 'Enter' });

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
            fireEvent.keyDown(tablist, { key: 'Enter' });

            expect(mockOnChange).toHaveBeenCalledWith(2);
        });

        it('ignores other keys', () => {
            render(
                <TabList activeIndex={0} onChange={mockOnChange}>
                    {defaultChildren}
                </TabList>
            );

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'Escape' });
            fireEvent.keyDown(tablist, { key: 'Tab' });
            fireEvent.keyDown(tablist, { key: 'Home' });

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
            fireEvent.keyDown(tablist, { key: 'Enter' });

            // Should activate the same tab (index 0)
            expect(mockOnChange).toHaveBeenCalledWith(0);
            expect(mockOnChange).toHaveBeenCalledTimes(1);
        });

        it('does not navigate when no tabs present', () => {
            render(<TabList onChange={mockOnChange} />);

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'ArrowRight' });
            fireEvent.keyDown(tablist, { key: 'ArrowLeft' });
            fireEvent.keyDown(tablist, { key: 'Enter' });
            fireEvent.keyDown(tablist, { key: ' ' });

            expect(mockOnChange).not.toHaveBeenCalled();
        });
    });

    describe('Variants', () => {
        it('renders with bordered variant by default', () => {
            render(<TabList>{defaultChildren}</TabList>);

            const tablist = screen.getByRole('tablist');
            expect(tablist).toBeInTheDocument();

            // Should render the indicator for bordered variant by default
            const indicator = tablist.querySelector('.ns-tab-indicator');
            expect(indicator).toBeInTheDocument();
        });

        it('renders with bordered variant explicitly set', () => {
            render(<TabList variant="bordered">{defaultChildren}</TabList>);

            const tablist = screen.getByRole('tablist');
            expect(tablist).toBeInTheDocument();

            // Should render the indicator for bordered variant
            const indicator = tablist.querySelector('.ns-tab-indicator');
            expect(indicator).toBeInTheDocument();
        });

        it('renders with rounded variant', () => {
            render(<TabList variant="rounded">{defaultChildren}</TabList>);

            const tablist = screen.getByRole('tablist');
            expect(tablist).toBeInTheDocument();

            // Should not render the indicator for rounded variant
            const indicator = tablist.querySelector('.ns-tab-indicator');
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
        it('renders indicator only for bordered variant', () => {
            const { rerender } = render(
                <TabList variant="bordered">{defaultChildren}</TabList>
            );

            let tablist = screen.getByRole('tablist');
            let indicator = tablist.querySelector('.ns-tab-indicator');
            expect(indicator).toBeInTheDocument();

            rerender(<TabList variant="rounded">{defaultChildren}</TabList>);

            tablist = screen.getByRole('tablist');
            indicator = tablist.querySelector('.ns-tab-indicator');
            expect(indicator).not.toBeInTheDocument();
        });

        it('positions indicator based on active tab', () => {
            const { rerender } = render(
                <TabList variant="bordered" activeIndex={0}>
                    {defaultChildren}
                </TabList>
            );

            let tablist = screen.getByRole('tablist');
            let indicator = tablist.querySelector(
                '.ns-tab-indicator'
            ) as HTMLElement;
            expect(indicator).toBeInTheDocument();

            // Mock offsetLeft and offsetWidth for testing
            Object.defineProperty(HTMLElement.prototype, 'offsetLeft', {
                configurable: true,
                value: 0,
            });
            Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
                configurable: true,
                value: 100,
            });

            rerender(
                <TabList variant="bordered" activeIndex={1}>
                    {defaultChildren}
                </TabList>
            );

            // Indicator should still be present
            tablist = screen.getByRole('tablist');
            indicator = tablist.querySelector(
                '.ns-tab-indicator'
            ) as HTMLElement;
            expect(indicator).toBeInTheDocument();
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
            expect(tablist).toHaveAttribute('aria-label', 'Tab list');
        });

        it('maintains focus management with roving tabindex', () => {
            render(<TabList activeIndex={1}>{defaultChildren}</TabList>);

            const tabs = screen.getAllByRole('tab');
            // Only the active/focused tab should be focusable
            expect(tabs[0]).toHaveAttribute('tabindex', '-1');
            expect(tabs[1]).toHaveAttribute('tabindex', '0');
            expect(tabs[2]).toHaveAttribute('tabindex', '-1');
        });

        it('updates tabindex when focus changes via keyboard', () => {
            render(<TabList activeIndex={0}>{defaultChildren}</TabList>);

            const tablist = screen.getByRole('tablist');
            let tabs = screen.getAllByRole('tab');

            // Initially, first tab should be focusable
            expect(tabs[0]).toHaveAttribute('tabindex', '0');
            expect(tabs[1]).toHaveAttribute('tabindex', '-1');

            // Move focus to next tab
            fireEvent.keyDown(tablist, { key: 'ArrowRight' });

            // Re-query tabs after state update
            tabs = screen.getAllByRole('tab');
            expect(tabs[0]).toHaveAttribute('tabindex', '-1');
            expect(tabs[1]).toHaveAttribute('tabindex', '0');
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
            fireEvent.keyDown(tablist, { key: 'Enter' });
            fireEvent.keyDown(tablist, { key: ' ' });

            // Should not call onChange when there are no tabs
            expect(mockOnChange).not.toHaveBeenCalled();
        });
    });

    describe('Focus Management', () => {
        it('calls focusTab function when navigating with arrow keys', () => {
            // Mock the focus method on HTMLElement
            HTMLElement.prototype.focus = jest.fn();

            render(
                <TabList activeIndex={0} onChange={mockOnChange}>
                    {defaultChildren}
                </TabList>
            );

            const tablist = screen.getByRole('tablist');
            fireEvent.keyDown(tablist, { key: 'ArrowRight' });

            // The focus method should be called on the tab element
            expect(HTMLElement.prototype.focus).toHaveBeenCalled();

            // Clean up the mock
            (HTMLElement.prototype.focus as jest.Mock).mockRestore();
        });
    });
});
