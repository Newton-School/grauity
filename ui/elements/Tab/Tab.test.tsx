import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Tab from './Tab';

describe('Tab', () => {
    const requiredProps = {
        variant: 'rounded' as const,
    };

    it('renders with default props and children', () => {
        render(
            <Tab id="tab1" {...requiredProps}>
                Tab 1
            </Tab>
        );
        const tab = screen.getByRole('tab');
        expect(tab).toBeInTheDocument();
        expect(tab).toHaveTextContent('Tab 1');
    });

    it('renders with icon and subText', () => {
        render(
            <Tab id="tab2" icon="check" subText="Subtext" {...requiredProps}>
                Tab 2
            </Tab>
        );
        const tab = screen.getByRole('tab');
        expect(tab).toHaveTextContent('Tab 2');
        expect(tab).toHaveTextContent('Subtext');
        expect(tab.querySelector('i')).toBeInTheDocument();
    });

    it('calls onClick with id when clicked', () => {
        const handleClick = jest.fn();
        render(
            <Tab id="tab3" onClick={handleClick} {...requiredProps}>
                Tab 3
            </Tab>
        );
        const tab = screen.getByRole('tab');
        fireEvent.click(tab);
        expect(handleClick).toHaveBeenCalledWith('tab3');
    });

    it('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        render(
            <Tab id="tab4" onClick={handleClick} disabled {...requiredProps}>
                Tab 4
            </Tab>
        );
        const tab = screen.getByRole('tab');
        fireEvent.click(tab);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('has correct ARIA attributes', () => {
        render(
            <Tab id="tab5" isActive {...requiredProps}>
                Tab 5
            </Tab>
        );
        const tab = screen.getByRole('tab');
        expect(tab).toHaveAttribute('role', 'tab');
        expect(tab).toHaveAttribute('aria-selected', 'true');
        expect(tab).toHaveAttribute('aria-controls', 'tabpanel-tab5');
        expect(tab).toHaveAttribute('id', 'tab-tab5');
        expect(tab).toHaveAttribute('tabIndex', '0');
    });

    it('inactive tab has tabIndex -1', () => {
        render(
            <Tab id="tab6" isActive={false} {...requiredProps}>
                Tab 6
            </Tab>
        );
        const tab = screen.getByRole('tab');
        expect(tab).toHaveAttribute('tabIndex', '-1');
    });

    it('disabled tab has tabIndex -1 and disabled attribute', () => {
        render(
            <Tab id="tab7" disabled {...requiredProps}>
                Tab 7
            </Tab>
        );
        const tab = screen.getByRole('tab');
        expect(tab).toHaveAttribute('tabIndex', '-1');
        expect(tab).toBeDisabled();
    });
});
