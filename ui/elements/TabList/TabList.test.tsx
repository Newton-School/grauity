import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Tab from '../Tab';
import { TAB_LIST_VARIANT_ENUM } from './constants';
import TabList from './TabList';

describe('TabList', () => {
    const defaultTabs = [
        <Tab key="tab1">Tab 1</Tab>,
        <Tab key="tab2">Tab 2</Tab>,
        <Tab key="tab3">Tab 3</Tab>,
    ];

    it('renders TabList with Tab components', () => {
        render(<TabList>{defaultTabs}</TabList>);

        expect(screen.getByRole('tablist')).toBeInTheDocument();
        expect(screen.getByText('Tab 1')).toBeInTheDocument();
        expect(screen.getByText('Tab 2')).toBeInTheDocument();
        expect(screen.getByText('Tab 3')).toBeInTheDocument();
    });

    it('renders with correct ARIA attributes', () => {
        render(<TabList ariaLabel="Navigation tabs">{defaultTabs}</TabList>);

        const tablist = screen.getByRole('tablist');
        expect(tablist).toHaveAttribute('aria-label', 'Navigation tabs');
    });

    it('uses default aria-label when not provided', () => {
        render(<TabList>{defaultTabs}</TabList>);

        const tablist = screen.getByRole('tablist');
        expect(tablist).toHaveAttribute('aria-label', 'Tab list');
    });

    it('applies custom className', () => {
        render(<TabList className="custom-tablist">{defaultTabs}</TabList>);

        const tablist = screen.getByRole('tablist');
        expect(tablist).toHaveClass('custom-tablist');
    });

    it('sets the first tab as active by default', () => {
        render(<TabList>{defaultTabs}</TabList>);

        const tabs = screen.getAllByRole('tab');
        expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
        expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
        expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
    });

    it('sets the correct tab as active based on activeIndex prop', () => {
        render(<TabList activeIndex={1}>{defaultTabs}</TabList>);

        const tabs = screen.getAllByRole('tab');
        expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
        expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
        expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
    });

    it('calls onChange when a tab is clicked', () => {
        const handleChange = jest.fn();
        render(<TabList onChange={handleChange}>{defaultTabs}</TabList>);

        const tabs = screen.getAllByRole('tab');
        fireEvent.click(tabs[1]);

        expect(handleChange).toHaveBeenCalledWith(1);
    });

    it('passes variant prop to child Tab components', () => {
        const TabSpy = jest.spyOn(React, 'cloneElement');

        render(
            <TabList variant={TAB_LIST_VARIANT_ENUM.ROUNDED}>
                {defaultTabs}
            </TabList>
        );

        const cloneElementCalls = TabSpy.mock.calls;
        cloneElementCalls.forEach((call) => {
            const [, props] = call;
            expect(props).toHaveProperty(
                'variant',
                TAB_LIST_VARIANT_ENUM.ROUNDED
            );
        });

        TabSpy.mockRestore();
    });

    it('passes size prop to child Tab components', () => {
        const TabSpy = jest.spyOn(React, 'cloneElement');

        render(<TabList size="large">{defaultTabs}</TabList>);

        const cloneElementCalls = TabSpy.mock.calls;
        cloneElementCalls.forEach((call) => {
            const [, props] = call;
            expect(props).toHaveProperty('size', 'large');
        });

        TabSpy.mockRestore();
    });

    it('handles keyboard navigation - ArrowRight', () => {
        render(<TabList>{defaultTabs}</TabList>);

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        tabs[0].focus();
        fireEvent.keyDown(tablist, { key: 'ArrowRight' });

        expect(tabs[1]).toHaveFocus();
    });

    it('handles keyboard navigation - ArrowLeft', () => {
        render(<TabList activeIndex={1}>{defaultTabs}</TabList>);

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        tabs[1].focus();
        fireEvent.keyDown(tablist, { key: 'ArrowLeft' });

        expect(tabs[0]).toHaveFocus();
    });

    it('wraps around when navigating with ArrowRight from last tab', () => {
        render(<TabList activeIndex={2}>{defaultTabs}</TabList>);

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        tabs[2].focus();
        fireEvent.keyDown(tablist, { key: 'ArrowRight' });

        expect(tabs[0]).toHaveFocus();
    });

    it('wraps around when navigating with ArrowLeft from first tab', () => {
        render(<TabList>{defaultTabs}</TabList>);

        const tablist = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        tabs[0].focus();
        fireEvent.keyDown(tablist, { key: 'ArrowLeft' });

        expect(tabs[2]).toHaveFocus();
    });

    it('renders indicator for bordered variant', () => {
        render(
            <TabList variant={TAB_LIST_VARIANT_ENUM.BORDERED}>
                {defaultTabs}
            </TabList>
        );

        expect(
            screen.getByRole('tablist').querySelector('.ns-tab-indicator')
        ).toBeInTheDocument();
    });

    it('does not render indicator for rounded variant', () => {
        render(
            <TabList variant={TAB_LIST_VARIANT_ENUM.ROUNDED}>
                {defaultTabs}
            </TabList>
        );

        expect(
            screen.getByRole('tablist').querySelector('.ns-tab-indicator')
        ).not.toBeInTheDocument();
    });

    it('sets correct tabIndex for active tab', () => {
        render(<TabList activeIndex={1}>{defaultTabs}</TabList>);

        const tabs = screen.getAllByRole('tab');
        expect(tabs[0]).toHaveAttribute('tabIndex', '-1');
        expect(tabs[1]).toHaveAttribute('tabIndex', '0');
        expect(tabs[2]).toHaveAttribute('tabIndex', '-1');
    });

    it('handles empty children gracefully', () => {
        render(<TabList />);

        expect(screen.getByRole('tablist')).toBeInTheDocument();
        expect(screen.queryAllByRole('tab')).toHaveLength(0);
    });

    it('renders tabs with icons', () => {
        const tabsWithIcons = [
            <Tab key="tab1" icon="home">
                Home
            </Tab>,
            <Tab key="tab2" icon="users">
                Profile
            </Tab>,
            <Tab key="tab3" icon="code">
                Settings
            </Tab>,
        ];

        render(<TabList>{tabsWithIcons}</TabList>);

        const tabs = screen.getAllByRole('tab');
        tabs.forEach((tab) => {
            expect(tab.querySelector('i')).toBeTruthy();
        });
    });

    it('renders tabs with subtext', () => {
        const tabsWithSubtext = [
            <Tab key="tab1" subText="Home page">
                Home
            </Tab>,
            <Tab key="tab2" subText="User profile">
                Profile
            </Tab>,
        ];

        render(<TabList>{tabsWithSubtext}</TabList>);

        expect(screen.getByText('Home page')).toBeInTheDocument();
        expect(screen.getByText('User profile')).toBeInTheDocument();
    });

    it('handles disabled tabs', () => {
        const tabsWithDisabled = [
            <Tab key="tab1">Tab 1</Tab>,
            <Tab key="tab2" disabled>
                Disabled Tab
            </Tab>,
            <Tab key="tab3">Tab 3</Tab>,
        ];

        const handleChange = jest.fn();
        render(<TabList onChange={handleChange}>{tabsWithDisabled}</TabList>);

        const tabs = screen.getAllByRole('tab');
        expect(tabs[1]).toBeDisabled();

        fireEvent.click(tabs[1]);
        expect(handleChange).not.toHaveBeenCalled();
    });
});
