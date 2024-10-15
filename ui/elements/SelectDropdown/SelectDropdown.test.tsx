import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import SelectDropdown from './SelectDropdown';

const openDropdown = () => {
    fireEvent.click(screen.getByRole('button'));
};

describe('SelectDropdown Component', () => {
    const options = new Set([
        { id: 'option1', label: 'Option 1' },
        { id: 'option2', label: 'Option 2' },
        { id: 'option3', label: 'Option 3' },
    ]);

    // Component Rendering
    it('renders without crashing', () => {
        render(<SelectDropdown />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
    it('displays all options when clicked', () => {
        render(<SelectDropdown options={options} />);
        openDropdown();
        options.forEach((option) => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    // Trigger Component
    it('renders trigger component', () => {
        render(
            <SelectDropdown
                triggerComponent={<button type="button">Trigger Button</button>}
            />
        );
        expect(screen.getByText('Trigger Button')).toBeInTheDocument();
    });
    it('displays all options when trigger component is clicked', () => {
        render(
            <SelectDropdown
                options={options}
                triggerComponent={<button type="button">Trigger Button</button>}
            />
        );
        fireEvent.click(screen.getByText('Trigger Button'));
        options.forEach((option) => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    // Search Functionality
    it('shows search input when shouldEnableSearch is true', () => {
        render(<SelectDropdown shouldEnableSearch />);
        openDropdown();
        const searchInput = screen.getByRole('searchbox');
        expect(searchInput).toBeInTheDocument();
    });
    it('does not show search input when shouldEnableSearch is false', () => {
        render(<SelectDropdown shouldEnableSearch={false} />);
        openDropdown();
        const searchInput = screen.queryByRole('searchbox');
        expect(searchInput).not.toBeInTheDocument();
    });
    it('renders search box with placeholder text', () => {
        render(
            <SelectDropdown shouldEnableSearch searchPlaceholder="Search..." />
        );
        openDropdown();
        const searchInput = screen.getByRole('searchbox');
        expect(searchInput).toHaveAttribute('placeholder', 'Search...');
    });

    // onChange Callback
    it('calls onChange when an option is selected', () => {
        const handleChange = jest.fn();
        render(<SelectDropdown options={options} onChange={handleChange} />);
        openDropdown();
        fireEvent.click(screen.getByText('Option 2'));
        expect(handleChange).toHaveBeenCalledWith({
            id: 'option2',
            label: 'Option 2',
        });
    });

    // Empty Options
    it('handles empty options gracefully', () => {
        render(<SelectDropdown />);
        openDropdown();
        expect(screen.queryByRole('option')).not.toBeInTheDocument();
    });

    // Close Dropdown
    it('closes the dropdown when an option is selected', async () => {
        render(<SelectDropdown options={options} />);
        openDropdown();
        fireEvent.click(screen.getByText('Option 1'));
        await new Promise((r) => setTimeout(r, 3000));
        expect(screen.queryAllByRole('option')).toHaveLength(0);
    }, 5000);
    it('closes the dropdown when clicked outside', async () => {
        render(<SelectDropdown options={options} />);
        openDropdown();
        fireEvent.click(screen.getByTestId('testid-pop-over-wrapper'));
        await new Promise((r) => setTimeout(r, 3000));
        expect(screen.queryAllByRole('option')).toHaveLength(0);
    }, 5000);
});
