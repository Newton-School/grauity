import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { BaseItemOptionProps, BaseItemType } from '../../DropdownMenu';
import Combobox from './Combobox';
import { ComboboxProps } from './types';

const getDummyOptions = (count: number): BaseItemOptionProps[] => {
    return Array.from({ length: count }, (_, i) => ({
        type: BaseItemType.OPTION,
        label: `Item ${i}`,
        value: `item-${i}`,
    }));
};

const defaultProps: ComboboxProps = {
    items: [],
    value: null,
    name: 'combobox',
    placeholder: 'Select items',
    applyOnOptionSelectInMultipleMode: true,
    multiple: true,
};

describe('Combobox', () => {
    // Rendering trigger
    it('Should render the combobox trigger', () => {
        const { getByRole } = render(<Combobox {...defaultProps} />);
        expect(getByRole('combobox')).toBeInTheDocument();
        expect(getByRole('textbox')).toBeInTheDocument();
    });

    // Rendering label
    it('Should render the label', () => {
        const { getByText } = render(
            <Combobox {...defaultProps} label="Combobox label" />
        );
        expect(getByText('Combobox label')).toBeInTheDocument();
    });

    // Rendering placeholder
    it('Should render the placeholder', () => {
        const { getByPlaceholderText } = render(
            <Combobox {...defaultProps} placeholder="Search here" />
        );
        expect(getByPlaceholderText('Search here')).toBeInTheDocument();
    });

    // Rendering Help Message
    it('Should render the help message', () => {
        const { getByText } = render(
            <Combobox {...defaultProps} helpMessage="Help message" />
        );
        expect(getByText('Help message')).toBeInTheDocument();
    });

    // Rendering Error Message
    it('Should render the error message', () => {
        const { getByText } = render(
            <Combobox {...defaultProps} errorMessage="Error message" />
        );
        expect(getByText('Error message')).toBeInTheDocument();
    });

    // Testing functionality of the text input in combobox, should call onTextInputChange when typing
    it('Should call onTextInputChange when typing in the input', () => {
        const onTextInputChange = jest.fn();
        render(
            <Combobox {...defaultProps} onTextInputChange={onTextInputChange} />
        );

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'Test' },
        });
        setTimeout(() => {
            expect(onTextInputChange).toHaveBeenCalledWith('Test');
        }, 1000);
    });

    // Testing opening and closing of the dropdown menu
    it('Should open the dropdown menu on trigger click', () => {
        const items = getDummyOptions(3);
        render(<Combobox {...defaultProps} items={items} />);

        fireEvent.click(screen.getByRole('textbox'));
        expect(screen.getByText('Item 0')).toBeInTheDocument();

        fireEvent.click(screen.getByRole('textbox'));
        expect(screen.queryByText('Item 0')).not.toBeInTheDocument();
    });

    it('Should call onChange and close dropdown menu when selecting an item in single select mode', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);
        render(
            <Combobox
                {...defaultProps}
                items={items}
                onChange={onChange}
                multiple={false}
            />
        );

        fireEvent.click(screen.getByRole('combobox'));
        fireEvent.click(screen.getByText('Item 0'));
        expect(onChange).toHaveBeenCalledWith(items[0]);

        // Closes the dropdown after selection
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();

        // Tag is visible with selected item
        expect(screen.getByText('Item 0')).toBeInTheDocument();

        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('Item 1'));
        expect(onChange).toHaveBeenCalledWith(items[1]);

        // Closes the dropdown after selection
        expect(screen.queryByText('Item 0')).not.toBeInTheDocument();
        expect(screen.queryByText('Item 2')).not.toBeInTheDocument();

        // Tag is visible with selected item
        expect(screen.getByText('Item 1')).toBeInTheDocument();
    });

    it('Should call onChange when selecting items in multi-select mode and closes when clicking outside', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);
        render(
            <Combobox
                {...defaultProps}
                items={items}
                onChange={onChange}
                multiple
            />
        );

        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('Item 0'));
        fireEvent.click(screen.getByText('Item 1'));
        expect(onChange).toHaveBeenCalledWith([items[0], items[1]]);

        // Not closed yet, so all options should still be visible
        expect(screen.getByText('Item 2')).toBeInTheDocument();

        // Clicking outside should close the dropdown
        fireEvent.click(screen.getByRole('textbox'));
        expect(screen.queryByText('Item 2')).not.toBeInTheDocument();

        // But selected items should still be visible as tags
        expect(screen.getByText('Item 0')).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
    });

    // In single-select mode, if showActionButtons is true, it should only call onChange when clicking on "Apply" button and not on item click or clicking outside
    it('Should not call onChange on item click in single select mode with showActionButtons', () => {
        const onChange = jest.fn();
        const onClose = jest.fn();
        const items = getDummyOptions(3);

        render(
            <Combobox
                {...defaultProps}
                items={items}
                onChange={onChange}
                onClose={onClose}
                multiple={false}
                showActionButtons
            />
        );

        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('Item 0'));
        const selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(1);

        expect(onChange).not.toHaveBeenCalled();
        expect(onClose).not.toHaveBeenCalled();

        // Clicking outside should not call onChange
        fireEvent.click(screen.getByRole('textbox'));

        expect(onChange).not.toHaveBeenCalled();
        expect(screen.queryByText('Item 0')).not.toBeInTheDocument();

        // Clicking "Apply" after clicking on option should call onChange
        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('Item 0'));
        fireEvent.click(screen.getByText('Apply'));
        expect(onChange).toHaveBeenCalledWith(items[0]);

        // Selected item should be visible as tag, and dropdown should close
        expect(screen.queryByText('Item 0')).toBeInTheDocument();
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    });

    // In multi-select mode, if showActionButtons is true, it should only call onChange on when clicking on "Apply" button and not on item click or clicking outside
    it('Should not call onChange on item click in multiple select mode with showActionButtons', () => {
        const onChange = jest.fn();
        const onClose = jest.fn();
        const items = getDummyOptions(3);

        render(
            <Combobox
                {...defaultProps}
                items={items}
                onChange={onChange}
                onClose={onClose}
                multiple
                showActionButtons
            />
        );

        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('Item 0'));
        fireEvent.click(screen.getByText('Item 1'));
        let selectedItems = screen.getAllByRole('option', {
            checked: true,
        });
        expect(selectedItems).toHaveLength(2);

        expect(onChange).not.toHaveBeenCalled();
        expect(onClose).not.toHaveBeenCalled();

        // Clicking outside should not call onChange
        fireEvent.click(screen.getByRole('textbox'));
        expect(onChange).not.toHaveBeenCalled();
        expect(screen.queryByText('Item 0')).not.toBeInTheDocument();
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();

        // Clicking "Apply" after selecting on options should call onChange
        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('Item 0'));
        fireEvent.click(screen.getByText('Item 1'));
        selectedItems = screen.getAllByRole('option', {
            checked: true,
        });
        expect(selectedItems).toHaveLength(2);

        // Clicking on Apply button should call onChange and close the dropdown
        fireEvent.click(screen.getByText('Apply'));
        expect(onChange).toHaveBeenCalledWith([items[0], items[1]]);

        // Selected item should be visible as tag, and dropdown should close
        expect(screen.queryByText('Item 0')).toBeInTheDocument();
        expect(screen.queryByText('Item 1')).toBeInTheDocument();
        expect(screen.queryByText('Item 2')).not.toBeInTheDocument();
    });

    // Checking disabled state
    it('Should not open the dropdown when disabled', () => {
        render(<Combobox {...defaultProps} isDisabled />);

        fireEvent.click(screen.getByRole('textbox'));
        expect(screen.queryByText('Item 0')).not.toBeInTheDocument();
    });

    // Checking custom tag rendering using renderValue prop
    it('Should render custom value using renderValue prop', () => {
        const items = getDummyOptions(3);
        render(
            <Combobox
                {...defaultProps}
                items={items}
                renderValue={({ item, onDismiss }) => (
                    <div data-testid="custom-tag">
                        {item.label}
                        <button type="button" onClick={onDismiss}>
                            x
                        </button>
                    </div>
                )}
            />
        );

        // Open dropdown and select an item
        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('Item 0'));

        // Check if custom tag is rendered
        expect(screen.getByTestId('custom-tag')).toBeInTheDocument();

        // Dismiss the tag
        fireEvent.click(screen.getByText('x'));
        expect(screen.queryByTestId('custom-tag')).not.toBeInTheDocument();
    });

    // Check shouldDismissOnBackspace functionality for multiple select mode
    it('Should dismiss last selected item on Backspace when shouldDismissOnBackspace is true in multiple mode', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);
        render(
            <Combobox
                {...defaultProps}
                items={items}
                onChange={onChange}
                shouldDismissOnBackspace
                multiple
            />
        );

        // Open dropdown and select two items
        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('Item 0'));
        expect(onChange).toHaveBeenCalledWith([items[0]]);
        fireEvent.click(screen.getByText('Item 1'));
        expect(onChange).toHaveBeenCalledWith([items[0], items[1]]);

        // Press Backspace
        const input = screen.getByRole('textbox');
        fireEvent.keyDown(input, { key: 'Backspace', code: 'Backspace' });

        // onChange should be called with only the first item
        expect(onChange).toHaveBeenCalledWith([items[0]]);

        // Only first tag should remain
        expect(screen.getByText('Item 0')).toBeInTheDocument();
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    });

    // Check shouldDismissOnBackspace functionality for single select mode
    it('Should dismiss last selected item on Backspace when shouldDismissOnBackspace is true in single mode', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);
        render(
            <Combobox
                {...defaultProps}
                items={items}
                onChange={onChange}
                shouldDismissOnBackspace
                multiple={false}
            />
        );

        // Open dropdown and select an item
        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('Item 0'));
        expect(onChange).toHaveBeenCalledWith(items[0]);

        // Focus input and press Backspace
        const input = screen.getByRole('textbox');
        fireEvent.keyDown(input, { key: 'Backspace', code: 'Backspace' });

        // onChange should be called with null
        expect(onChange).toHaveBeenCalledWith(null);

        // No tags should remain
        expect(screen.queryByText('Item 0')).not.toBeInTheDocument();
    });

});
