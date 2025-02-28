import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { BaseItemOptionProps, BaseItemType } from '../../DropdownMenu';
import Dropdown from './Dropdown';
import { DropdownProps } from './types';

const getDummyOptions = (count: number): BaseItemOptionProps[] => {
    return Array.from({ length: count }, (_, i) => ({
        type: BaseItemType.OPTION,
        label: `Item ${i}`,
        value: `item-${i}`,
    }));
};

const defaultProps: DropdownProps = {
    items: [],
    value: null,
    name: 'dropdown',
    clearAllButtonText: 'Clear',
    applyButtonText: 'Apply',
    showSelectedValueOnTrigger: false,
};

describe('Dropdown', () => {
    // Rendering Trigger
    it('Should render the trigger', () => {
        const { getByRole } = render(<Dropdown {...defaultProps} />);
        expect(getByRole('button')).toBeInTheDocument();
    });

    // Rendering Label
    it('Should render the label', () => {
        const { getByText } = render(
            <Dropdown {...defaultProps} label="Dropdown" />
        );
        expect(getByText('Dropdown')).toBeInTheDocument();
    });

    // Rendering Placeholder
    it('Should render the placeholder', () => {
        const { getByText } = render(
            <Dropdown {...defaultProps} placeholder="Select an item" />
        );
        expect(getByText('Select an item')).toBeInTheDocument();
    });

    // Rendering Help Message
    it('Should render the help message', () => {
        const { getByText } = render(
            <Dropdown {...defaultProps} helpMessage="Help message" />
        );
        expect(getByText('Help message')).toBeInTheDocument();
    });

    // Rendering Error Message
    it('Should render the error message', () => {
        const { getByText } = render(
            <Dropdown {...defaultProps} errorMessage="Error message" />
        );
        expect(getByText('Error message')).toBeInTheDocument();
    });

    // Single Select Mode Flow
    it('Should run entire flow correctly in single select mode if no action buttons', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);

        render(
            <Dropdown
                {...defaultProps}
                placeholder="Select"
                items={items}
                onChange={onChange}
            />
        );

        // Should open the dropdown
        fireEvent.click(screen.getByText('Select'));
        expect(screen.getByText('Item 0')).toBeInTheDocument();

        // Should call onChange on selecting an item
        fireEvent.click(screen.getByText('Item 0'));
        expect(onChange).toHaveBeenCalledWith(items[0]);

        // Should close the dropdown
        expect(screen.queryByText('Item 0')).not.toBeInTheDocument();

        // Should call onChange on selecting another item
        fireEvent.click(screen.getByText('Select'));
        fireEvent.click(screen.getByText('Item 1'));
        expect(onChange).toHaveBeenCalledWith(items[1]);
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    });
    it('Should run entire flow correctly in single select mode if action buttons are present', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);

        render(
            <Dropdown
                {...defaultProps}
                placeholder="Select"
                items={items}
                onChange={onChange}
                showActionButtons
            />
        );

        // Should open the dropdown
        fireEvent.click(screen.getByText('Select'));
        expect(screen.getByText('Item 0')).toBeInTheDocument();

        // Should not call onChange on selecting an item
        fireEvent.click(screen.getByText('Item 0'));
        expect(onChange).not.toHaveBeenCalled();

        // Should call onChange on clicking apply button
        fireEvent.click(screen.getByText('Apply'));
        expect(onChange).toHaveBeenCalledWith(items[0]);

        // Should close the dropdown
        expect(screen.queryByText('Item 0')).not.toBeInTheDocument();
    });

    // Multi Select Mode Flow
    it('Should run entire flow correctly in multi select mode if no action buttons', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);

        render(
            <Dropdown
                {...defaultProps}
                placeholder="Select"
                items={items}
                onChange={onChange}
                multiple
            />
        );

        // Should open the dropdown
        fireEvent.click(screen.getByText('Select'));
        expect(screen.getByText('Item 0')).toBeInTheDocument();

        // Should not call onChange on selecting an item
        fireEvent.click(screen.getByText('Item 0'));
        let selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(1);
        expect(onChange).not.toHaveBeenCalled();
        fireEvent.click(screen.getByText('Item 1'));
        selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(2);
        expect(onChange).not.toHaveBeenCalled();

        // Should call onChange on clicking outside the dropdown
        fireEvent.mouseDown(document.body);
        expect(onChange).toHaveBeenCalledWith([items[0], items[1]]);

        // Should close the dropdown
        expect(screen.queryByText('Item 0')).not.toBeInTheDocument();
    });
    it('Should run entire flow correctly in multi select mode if action buttons are present', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);

        render(
            <Dropdown
                {...defaultProps}
                placeholder="Select"
                items={items}
                onChange={onChange}
                multiple
                showActionButtons
            />
        );

        // Should open the dropdown
        fireEvent.click(screen.getByText('Select'));
        expect(screen.getByText('Item 0')).toBeInTheDocument();

        // Should not call onChange on selecting an item
        fireEvent.click(screen.getByText('Item 0'));
        let selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(1);
        expect(onChange).not.toHaveBeenCalled();
        fireEvent.click(screen.getByText('Item 1'));
        selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(2);
        expect(onChange).not.toHaveBeenCalled();

        // Should not call onChange on clicking outside the dropdown
        fireEvent.mouseDown(document.body);
        expect(onChange).not.toHaveBeenCalled();

        // Should call onChange on clicking apply button
        fireEvent.click(screen.getByText('Apply'));
        expect(onChange).toHaveBeenCalledWith([items[0], items[1]]);
        expect(screen.queryByText('Item 0')).not.toBeInTheDocument();

        // Should clear the selected items on clicking clear button
        fireEvent.click(screen.getByText('Select'));
        fireEvent.click(screen.getByText('Item 0'));
        fireEvent.click(screen.getByText('Item 1'));
        selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(2);
        fireEvent.click(screen.getByText('Clear'));
        selectedItems = screen.queryAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(0);
        fireEvent.click(screen.getByText('Apply'));
        expect(onChange).toHaveBeenCalledWith([]);
        expect(screen.queryByText('Item 0')).not.toBeInTheDocument();
    });

    // Show Selected Value
    it('Should show selected value on trigger in single select mode', () => {
        const items = getDummyOptions(3);

        render(
            <Dropdown
                {...defaultProps}
                placeholder="Select"
                items={items}
                showSelectedValueOnTrigger
            />
        );

        // Opening the dropdown and selecting option
        fireEvent.click(screen.getByText('Select'));
        fireEvent.click(screen.getByText('Item 0'));

        // Should show the selected value and not placeholder
        expect(screen.queryByText('Item 0')).toBeInTheDocument();
        expect(screen.queryByText('Select')).not.toBeInTheDocument();
    });
    it('Should show selected value on trigger in multi select mode', () => {
        const items = getDummyOptions(3);

        render(
            <Dropdown
                {...defaultProps}
                placeholder="Select"
                items={items}
                multiple
                showSelectedValueOnTrigger
            />
        );

        // Opening the dropdown and selecting option
        fireEvent.click(screen.getByText('Select'));
        fireEvent.click(screen.getByText('Item 0'));
        fireEvent.click(screen.getByText('Item 1'));
        fireEvent.mouseDown(document.body);

        // Should show the selected value and not placeholder
        expect(screen.queryByText('Select')).not.toBeInTheDocument();
        expect(screen.queryByText('2 selected')).toBeInTheDocument();
    });

    // Custom Trigger
    it('Should render the custom trigger', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);

        render(
            <Dropdown
                {...defaultProps}
                items={items}
                trigger={<button type="button">Custom Trigger</button>}
                onChange={onChange}
            />
        );

        expect(screen.getByText('Custom Trigger')).toBeInTheDocument();

        // Opening the dropdown and selecting option
        fireEvent.click(screen.getByText('Custom Trigger'));

        expect(screen.getByText('Item 0')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Item 0'));

        expect(onChange).toHaveBeenCalledWith(items[0]);
    });
});
