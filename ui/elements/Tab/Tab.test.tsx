import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Tab from './Tab';

describe('Tab', () => {
    describe('Basic Rendering', () => {
        it('renders with default props and children', () => {
            render(<Tab id="tab1">Tab 1</Tab>);

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
            expect(tab).toHaveTextContent('Tab 1');
            expect(tab).toHaveAttribute('type', 'button');
        });

        it('renders with custom id', () => {
            render(<Tab id="custom-tab">Custom Tab</Tab>);

            const tab = screen.getByRole('tab');
            expect(tab).toHaveAttribute('id', 'tab-custom-tab');
            expect(tab).toHaveAttribute('aria-controls', 'tabpanel-custom-tab');
        });

        it('renders without id and generates one automatically', () => {
            render(<Tab>No ID Tab</Tab>);

            const tab = screen.getByRole('tab');
            expect(tab).toHaveAttribute('id');
            expect(tab.getAttribute('id')).toMatch(/^tab-:/);
        });

        it('renders with custom className and style', () => {
            const customStyle = { backgroundColor: 'red' };
            render(
                <Tab
                    id="styled-tab"
                    className="custom-class"
                    style={customStyle}
                >
                    Styled Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveClass('custom-class');
            expect(tab).toHaveStyle('background-color: red');
        });
    });

    describe('Content Rendering', () => {
        it('renders with icon and text', () => {
            render(
                <Tab id="tab-with-icon" icon="check">
                    Tab with Icon
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveTextContent('Tab with Icon');
            // Icon component renders an SVG or similar element
            expect(
                tab.querySelector('svg') ||
                    tab.querySelector('[data-testid*="icon"]')
            ).toBeTruthy();
        });

        it('renders with subText as string', () => {
            render(
                <Tab id="tab-with-subtext" subText="Subtext">
                    Tab with Subtext
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveTextContent('Tab with Subtext');
            expect(tab).toHaveTextContent('Subtext');
        });

        it('renders with subText as ReactNode', () => {
            const customSubtext = (
                <span data-testid="custom-subtext">Custom</span>
            );
            render(
                <Tab id="tab-with-custom-subtext" subText={customSubtext}>
                    Tab with Custom Subtext
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveTextContent('Tab with Custom Subtext');
            expect(screen.getByTestId('custom-subtext')).toBeInTheDocument();
        });

        it('renders with icon, text, and subText', () => {
            render(
                <Tab id="full-tab" icon="check" subText="Badge">
                    Full Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveTextContent('Full Tab');
            expect(tab).toHaveTextContent('Badge');
            expect(
                tab.querySelector('svg') ||
                    tab.querySelector('[data-testid*="icon"]')
            ).toBeTruthy();
        });

        it('renders only icon when no children or subText', () => {
            render(<Tab id="icon-only" icon="check" />);

            const tab = screen.getByRole('tab');
            expect(
                tab.querySelector('svg') ||
                    tab.querySelector('[data-testid*="icon"]')
            ).toBeTruthy();
        });
    });

    describe('Variants', () => {
        it('renders with default border variant', () => {
            render(<Tab id="border-tab">Border Tab</Tab>);

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });

        it('renders with rounded variant', () => {
            render(
                <Tab id="rounded-tab" variant="rounded">
                    Rounded Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });
    });

    describe('Sizes', () => {
        it('renders with default medium size', () => {
            render(<Tab id="medium-tab">Medium Tab</Tab>);

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });

        it('renders with small size', () => {
            render(
                <Tab id="small-tab" size="small">
                    Small Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });

        it('renders with large size', () => {
            render(
                <Tab id="large-tab" size="large">
                    Large Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });

        it('renders with extra-large size', () => {
            render(
                <Tab id="xl-tab" size="extra-large">
                    Extra Large Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });
    });

    describe('Icon Positioning', () => {
        it('renders with icon on left by default', () => {
            render(
                <Tab id="left-icon" icon="check">
                    Left Icon
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });

        it('renders with icon on right', () => {
            render(
                <Tab id="right-icon" icon="check" iconPosition="right">
                    Right Icon
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });

        it('renders with icon on top', () => {
            render(
                <Tab id="top-icon" icon="check" iconPosition="top">
                    Top Icon
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });

        it('renders with icon on bottom', () => {
            render(
                <Tab id="bottom-icon" icon="check" iconPosition="bottom">
                    Bottom Icon
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });

        it('renders with custom icon size', () => {
            render(
                <Tab id="custom-icon-size" icon="check" iconSize="24">
                    Custom Icon Size
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });
    });

    describe('Click Interactions', () => {
        it('calls onClick when clicked and not disabled', () => {
            const handleClick = jest.fn();
            render(
                <Tab id="clickable-tab" onClick={handleClick}>
                    Clickable Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            fireEvent.click(tab);
            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        it('does not call onClick when disabled', () => {
            const handleClick = jest.fn();
            render(
                <Tab id="disabled-tab" onClick={handleClick} disabled>
                    Disabled Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            fireEvent.click(tab);
            expect(handleClick).not.toHaveBeenCalled();
        });

        it('calls onClick multiple times for multiple clicks', () => {
            const handleClick = jest.fn();
            render(
                <Tab id="multi-click-tab" onClick={handleClick}>
                    Multi Click Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            fireEvent.click(tab);
            fireEvent.click(tab);
            fireEvent.click(tab);
            expect(handleClick).toHaveBeenCalledTimes(3);
        });
    });

    describe('Active State', () => {
        it('renders as inactive by default', () => {
            render(<Tab id="inactive-tab">Inactive Tab</Tab>);

            const tab = screen.getByRole('tab');
            expect(tab).toHaveAttribute('aria-selected', 'false');
        });

        it('renders as active when isActive is true', () => {
            render(
                <Tab id="active-tab" isActive>
                    Active Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveAttribute('aria-selected', 'true');
        });

        it('has different styling when active', () => {
            const { rerender } = render(<Tab id="state-tab">State Tab</Tab>);

            let tab = screen.getByRole('tab');
            expect(tab).toHaveAttribute('aria-selected', 'false');

            rerender(
                <Tab id="state-tab" isActive>
                    State Tab
                </Tab>
            );

            tab = screen.getByRole('tab');
            expect(tab).toHaveAttribute('aria-selected', 'true');
        });
    });

    describe('Disabled State', () => {
        it('renders as enabled by default', () => {
            render(<Tab id="enabled-tab">Enabled Tab</Tab>);

            const tab = screen.getByRole('tab');
            expect(tab).not.toBeDisabled();
        });

        it('renders as disabled when disabled prop is true', () => {
            render(
                <Tab id="disabled-tab" disabled>
                    Disabled Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeDisabled();
        });
    });

    describe('Accessibility', () => {
        it('has correct ARIA attributes when active', () => {
            render(
                <Tab id="aria-tab" isActive>
                    ARIA Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveAttribute('role', 'tab');
            expect(tab).toHaveAttribute('aria-selected', 'true');
            expect(tab).toHaveAttribute('aria-controls', 'tabpanel-aria-tab');
            expect(tab).toHaveAttribute('id', 'tab-aria-tab');
        });

        it('has correct ARIA attributes when inactive', () => {
            render(
                <Tab id="inactive-aria-tab" isActive={false}>
                    Inactive ARIA Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveAttribute('role', 'tab');
            expect(tab).toHaveAttribute('aria-selected', 'false');
            expect(tab).toHaveAttribute(
                'aria-controls',
                'tabpanel-inactive-aria-tab'
            );
            expect(tab).toHaveAttribute('id', 'tab-inactive-aria-tab');
        });

        it('has correct tabIndex when active', () => {
            render(
                <Tab id="tab-index-active" isActive tabIndex={0}>
                    Active Tab Index
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveAttribute('tabIndex', '0');
        });

        it('has correct tabIndex when inactive', () => {
            render(
                <Tab id="tab-index-inactive" isActive={false} tabIndex={-1}>
                    Inactive Tab Index
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveAttribute('tabIndex', '-1');
        });

        it('uses default tabIndex of -1', () => {
            render(<Tab id="default-tab-index">Default Tab Index</Tab>);

            const tab = screen.getByRole('tab');
            expect(tab).toHaveAttribute('tabIndex', '-1');
        });

        it('disabled tab maintains accessibility attributes', () => {
            render(
                <Tab id="disabled-aria-tab" disabled isActive>
                    Disabled ARIA Tab
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toBeDisabled();
            expect(tab).toHaveAttribute('role', 'tab');
            expect(tab).toHaveAttribute('aria-selected', 'true');
        });
    });

    describe('Edge Cases', () => {
        it('renders with empty children', () => {
            render(<Tab id="empty-tab" />);

            const tab = screen.getByRole('tab');
            expect(tab).toBeInTheDocument();
        });

        it('renders with only subText and no children', () => {
            render(<Tab id="subtext-only" subText="Only Subtext" />);

            const tab = screen.getByRole('tab');
            expect(tab).toHaveTextContent('Only Subtext');
        });

        it('renders with falsy subText values', () => {
            render(
                <Tab id="falsy-subtext" subText="">
                    Falsy Subtext
                </Tab>
            );

            const tab = screen.getByRole('tab');
            expect(tab).toHaveTextContent('Falsy Subtext');
        });

        it('handles complex children content', () => {
            const complexContent = (
                <div>
                    <span>Complex</span> <strong>Content</strong>
                </div>
            );

            render(<Tab id="complex-tab">{complexContent}</Tab>);

            const tab = screen.getByRole('tab');
            expect(tab).toHaveTextContent('Complex Content');
        });
    });
});
