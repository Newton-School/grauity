import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import DropdownMenu, {
    BaseItemOptionProps,
    BaseItemType,
    DropdownMenuProps,
} from '.';

const getDummyOptions = (count: number): BaseItemOptionProps[] => {
    return Array.from({ length: count }, (_, i) => ({
        type: BaseItemType.OPTION,
        label: `Item ${i}`,
        value: `item-${i}`,
    }));
};

const defaultProps: DropdownMenuProps = {
    items: [],
    value: null,
};

describe('DropdownMenu', () => {
    // Rendering Header
    it('Should Render the header components', () => {
        render(
            <DropdownMenu
                {...defaultProps}
                showHeader
                overline="Overline"
                title="Title"
                subtext="Subtext"
            />
        );
        expect(screen.getByText('Overline')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Subtext')).toBeInTheDocument();
    });
    it('Should Render the custom header', () => {
        render(
            <DropdownMenu
                {...defaultProps}
                showHeader
                overline="Overline"
                title="Title"
                subtext="Subtext"
                customHeader={<div>Custom Header</div>}
            />
        );
        expect(screen.queryByText('Overline')).not.toBeInTheDocument();
        expect(screen.queryByText('Title')).not.toBeInTheDocument();
        expect(screen.queryByText('Subtext')).not.toBeInTheDocument();
        expect(screen.getByText('Custom Header')).toBeInTheDocument();
    });

    // Rendering Items
    it('Should Render the items', () => {
        render(<DropdownMenu {...defaultProps} items={getDummyOptions(5)} />);
        expect(screen.getByText('Item 0')).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getByText('Item 3')).toBeInTheDocument();
        expect(screen.getByText('Item 4')).toBeInTheDocument();
    });
    it('Should render the left and right icons of items', () => {
        const items = getDummyOptions(3);
        items[0].leftIcon = 'check';
        items[1].rightIcon = 'check-circle';

        render(<DropdownMenu {...defaultProps} items={items} />);

        const options = screen.getAllByRole('option');
        expect(options[0].querySelector('.grauity-icon')).toHaveClass(
            'grauity-icon-check'
        );
        expect(options[1].querySelector('.grauity-icon')).toHaveClass(
            'grauity-icon-check-circle'
        );
    });

    // Rendering Action Buttons
    it('Should render the actions buttons', () => {
        render(<DropdownMenu {...defaultProps} multiple showActionButtons />);
        expect(screen.getByText('Clear All')).toBeInTheDocument();
        expect(screen.getByText('Apply')).toBeInTheDocument();
    });
    it('Should not render the action button if showActionButtons is false', () => {
        render(<DropdownMenu {...defaultProps} multiple />);
        expect(screen.queryByText('Clear All')).not.toBeInTheDocument();
        expect(screen.queryByText('Apply')).not.toBeInTheDocument();
    });

    // Search Funnctionality
    it('Should render the search input', () => {
        render(<DropdownMenu {...defaultProps} searchable />);
        expect(screen.getByRole('searchbox')).toBeInTheDocument();
    });
    it('Should call onSearchInputChange on typing in search input', () => {
        const onSearchInputChange = jest.fn();
        render(
            <DropdownMenu
                {...defaultProps}
                searchable
                onSearchInputChange={onSearchInputChange}
            />
        );

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'Search' },
        });
        setTimeout(() => {
            expect(onSearchInputChange).toHaveBeenCalledWith('Search');
        }, 1000);
    });
    it('Should run the default search functionality', async () => {
        render(
            <DropdownMenu
                {...defaultProps}
                searchable
                items={getDummyOptions(3)}
            />
        );

        // Should filter the items on typing in search input
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'Item 1' },
        });
        await new Promise((resolve) =>
            setTimeout(() => {
                const options = screen.getAllByRole('option');
                expect(options).toHaveLength(1);
                expect(options[0]).toHaveTextContent('Item 1');
                resolve(true);
            }, 600)
        );

        // Should show all items on clearing the search input
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: '' },
        });
        await new Promise((resolve) =>
            setTimeout(() => {
                expect(screen.getAllByRole('option')).toHaveLength(3);
                resolve(true);
            }, 600)
        );
    }, 3000);

    // Single Select Mode Flow
    it('Should run entire flow correctly in single select mode if no action buttons', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);
        render(
            <DropdownMenu {...defaultProps} items={items} onChange={onChange} />
        );

        // Should call onChange on clicking an item
        fireEvent.click(screen.getByText('Item 1'));
        let selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(onChange).toHaveBeenCalledWith(items[1]);
        expect(selectedItems).toHaveLength(1);

        // Should call onChange on clicking another item
        fireEvent.click(screen.getByText('Item 2'));
        selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(onChange).toHaveBeenCalledWith(items[2]);
        expect(selectedItems).toHaveLength(1);
    });
    it('Should run entire flow correctly in single select mode if action buttons are present', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);
        render(
            <DropdownMenu
                {...defaultProps}
                items={items}
                onChange={onChange}
                showActionButtons
            />
        );

        // Should not call onChange on clicking an item
        fireEvent.click(screen.getByText('Item 1'));
        let selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(1);
        expect(onChange).not.toHaveBeenCalled();

        // Should call onChange on clicking Apply
        fireEvent.click(screen.getByText('Apply'));
        selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(1);
        expect(onChange).toHaveBeenCalledWith(items[1]);

        // Should change selected item on clicking another item
        fireEvent.click(screen.getByText('Item 2'));
        selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(1);

        // Should call onChange on clicking Apply
        fireEvent.click(screen.getByText('Apply'));
        selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(1);
        expect(onChange).toHaveBeenCalledWith(items[2]);
    });

    // Multiple Select Mode Flow
    it('Should run entire flow correctly in multiple select mode if no action buttons are present', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);

        render(
            <DropdownMenu
                {...defaultProps}
                items={items}
                onChange={onChange}
                multiple
            />
        );

        // Should not call onChange on clicking an item
        fireEvent.click(screen.getByText('Item 1'));
        let selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(1);
        expect(onChange).not.toHaveBeenCalled();

        // Should add to selected items on clicking another item
        fireEvent.click(screen.getByText('Item 2'));
        selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(2);
        expect(onChange).not.toHaveBeenCalled();

        // Should call onChange on clicking outside
        fireEvent.mouseDown(document);
        expect(onChange).toHaveBeenCalledWith([items[1], items[2]]);
    });
    it('Should run entire flow correctly in multiple select mode if action buttons are present', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);

        render(
            <DropdownMenu
                {...defaultProps}
                items={items}
                onChange={onChange}
                showActionButtons
                multiple
            />
        );

        // Should not call onChange on clicking an item
        fireEvent.click(screen.getByText('Item 1'));
        let selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(1);
        expect(onChange).not.toHaveBeenCalled();

        // Should add to selected items on clicking another item
        fireEvent.click(screen.getByText('Item 2'));
        selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(2);
        expect(onChange).not.toHaveBeenCalled();

        // Should not call onChange on clicking outside
        fireEvent.mouseDown(document);
        expect(onChange).not.toHaveBeenCalled();

        // Should Clear All Selected Items
        fireEvent.click(screen.getByText('Clear All'));
        selectedItems = screen.queryAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(0);

        // Should add to selected items on clicking multiple item
        fireEvent.click(screen.getByText('Item 1'));
        fireEvent.click(screen.getByText('Item 2'));
        selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(2);

        // Should call onChange on clicking Apply
        fireEvent.click(screen.getByText('Apply'));
        selectedItems = screen.getAllByRole('option', {
            selected: true,
        });
        expect(selectedItems).toHaveLength(2);
        expect(onChange).toHaveBeenCalledWith([items[1], items[2]]);
    });
});
