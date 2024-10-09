import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import MultiSelectDropdown from './MultiSelectDropdown';
import { DropdownOption } from './types';

const openDropdown = () => {
    const header = screen.getByRole('combobox');
    fireEvent.click(header);
};

describe('multi-select-dropdown', () => {
    const options: Set<DropdownOption> = new Set([
        { id: 1, label: 'Option 1' },
        { id: 2, label: 'Option 2' },
        { id: 3, label: 'Option 3' },
    ]) as any as Set<DropdownOption>;

    // Rendering of the component
    it('renders with default props', () => {
        render(<MultiSelectDropdown />);
        const dropdown = screen.getByRole('combobox');
        expect(dropdown).toBeInTheDocument();
    });

    // Dropdown Icon
    it('icon is chevron-down when dropdown is closed', () => {
        render(<MultiSelectDropdown />);
        const icon = screen.getByTestId('testid-icon');
        expect(icon).toHaveClass('grauity-icon');
        expect(icon).toHaveClass('grauity-icon-chevron-down');
    });
    it('icon is chevron-up when dropdown is opened', () => {
        render(<MultiSelectDropdown />);
        openDropdown();
        const icon = screen.getAllByTestId('testid-icon')[0];
        expect(icon).toHaveClass('grauity-icon');
        expect(icon).toHaveClass('grauity-icon-chevron-up');
    });

    // Search Box
    it('shows search input when shouldEnableSearch is true', () => {
        render(<MultiSelectDropdown shouldEnableSearch />);
        openDropdown();
        const searchInput = screen.getByRole('searchbox');
        expect(searchInput).toBeInTheDocument();
    });
    it('does not show search input when shouldEnableSearch is false', () => {
        render(<MultiSelectDropdown shouldEnableSearch={false} />);
        openDropdown();
        const searchInput = screen.queryByRole('searchbox');
        expect(searchInput).not.toBeInTheDocument();
    });
    it('renders search box with placeholder text', () => {
        render(
            <MultiSelectDropdown
                shouldEnableSearch
                searchPlaceholder="Search..."
            />
        );
        openDropdown();
        const searchInput = screen.getByRole('searchbox');
        expect(searchInput).toHaveAttribute('placeholder', 'Search...');
    });

    // Render Options
    it('renders options correctly', () => {
        render(<MultiSelectDropdown options={options} />);
        openDropdown();
        const option1 = screen.getByText('Option 1');
        const option2 = screen.getByText('Option 2');
        const option3 = screen.getByText('Option 3');
        expect(option1).toBeInTheDocument();
        expect(option2).toBeInTheDocument();
        expect(option3).toBeInTheDocument();
    });

    // Select All Options
    it('shows select all options when shouldEnableAllSelected is true', () => {
        render(
            <MultiSelectDropdown shouldEnableAllSelected allOptionText="All" />
        );
        openDropdown();
        const allOption = screen.getByText('All');
        expect(allOption).toBeInTheDocument();
    });
    it('does not show select all options when shouldEnableAllSelected is false', () => {
        render(
            <MultiSelectDropdown
                shouldEnableAllSelected={false}
                allOptionText="All"
            />
        );
        openDropdown();
        const allOption = screen.queryByText('All');
        expect(allOption).not.toBeInTheDocument();
    });
    it('renders all option text correctly', () => {
        render(
            <MultiSelectDropdown
                shouldEnableAllSelected
                allOptionText="Select all"
            />
        );
        openDropdown();
        const allOption = screen.getByText('Select all');
        expect(allOption).toBeInTheDocument();
    });

    // No Option Selected
    it('renders no option selected text correctly', () => {
        render(<MultiSelectDropdown noOptionSelctedText="Select option" />);
        const header = screen.getByRole('combobox');
        expect(header).toHaveTextContent('Select option');
    });

    // Apply Button
    it('calls onOptionsChange when apply button is clicked', () => {
        const onOptionsChange = jest.fn();
        render(
            <MultiSelectDropdown
                options={options}
                onOptionsChange={onOptionsChange}
            />
        );
        openDropdown();
        const applyButton = screen.getByTestId(
            'testid-multiselectdropdown-submitbutton'
        );
        fireEvent.click(applyButton);
        expect(onOptionsChange).toHaveBeenCalledTimes(1);
    });
    it('closes dropdown when apply button is clicked', () => {
        render(<MultiSelectDropdown options={options} />);
        openDropdown();
        const applyButton = screen.getByTestId(
            'testid-multiselectdropdown-submitbutton'
        );
        fireEvent.click(applyButton);
        const dropdown = screen.getByTestId('testid-multiselectdropdown-wrapper');
        expect(dropdown.children).toHaveLength(1);
    });

    // Select Options
    it('calls onOptionsChange with selected options when apply button is clicked', () => {
        const onOptionsChange = jest.fn();
        render(
            <MultiSelectDropdown
                options={options}
                onOptionsChange={onOptionsChange}
            />
        );
        openDropdown();
        const option1 = screen.getByText('Option 1');
        const option3 = screen.getByText('Option 3');
        fireEvent.click(option1);
        fireEvent.click(option3);
        const applyButton = screen.getByTestId(
            'testid-multiselectdropdown-submitbutton'
        );
        fireEvent.click(applyButton);
        expect(onOptionsChange).toHaveBeenCalledWith(
            new Set([
                { id: 1, label: 'Option 1' },
                { id: 3, label: 'Option 3' },
            ])
        );
    });
    it('calls onOptionsChange with all options when select all is clicked', () => {
        const onOptionsChange = jest.fn();
        render(
            <MultiSelectDropdown
                options={options}
                onOptionsChange={onOptionsChange}
                shouldEnableAllSelected
                allOptionText="All"
            />
        );
        openDropdown();
        const allOption = screen.getByText('All');
        fireEvent.click(allOption);
        const applyButton = screen.getByTestId(
            'testid-multiselectdropdown-submitbutton'
        );
        fireEvent.click(applyButton);
        expect(onOptionsChange).toHaveBeenCalledWith(options);
    });

    // Header Text
    it('renders header text correctly', () => {
        render(<MultiSelectDropdown noOptionSelctedText="Select options" />);
        const header = screen.getByRole('combobox');
        expect(header).toHaveTextContent('Select options');
    });
    it('renders header text correctly when one option is selected', () => {
        render(
            <MultiSelectDropdown
                options={options}
                noOptionSelctedText="Select options"
            />
        );
        openDropdown();
        const option1 = screen.getByText('Option 2');
        fireEvent.click(option1);
        const header = screen.getAllByRole('combobox')[0];
        expect(header).toHaveTextContent('Option 2');
    });
    it('renders header text correctly when multiple options are selected', () => {
        render(
            <MultiSelectDropdown
                options={options}
                noOptionSelctedText="Select options"
            />
        );
        openDropdown();
        const option1 = screen.getByText('Option 1');
        const option2 = screen.getByText('Option 2');
        fireEvent.click(option1);
        fireEvent.click(option2);
        const header = screen.getAllByRole('combobox')[0];
        expect(header).toHaveTextContent('2 selected');
    });
    it('renders header text correctly when all options are selected', () => {
        render(
            <MultiSelectDropdown
                options={options}
                noOptionSelctedText="Select options"
                shouldEnableAllSelected
                allOptionText="All"
            />
        );
        openDropdown();
        const allOption = screen.getByText('All');
        fireEvent.click(allOption);
        const header = screen.getAllByRole('combobox')[0];
        expect(header).toHaveTextContent('All');
    });
});
