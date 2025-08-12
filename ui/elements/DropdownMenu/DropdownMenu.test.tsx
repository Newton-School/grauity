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
            checked: true,
        });
        expect(selectedItems).toHaveLength(1);
        expect(onChange).not.toHaveBeenCalled();

        // Should add to selected items on clicking another item
        fireEvent.click(screen.getByText('Item 2'));
        selectedItems = screen.getAllByRole('option', {
            checked: true,
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
            checked: true,
        });
        expect(selectedItems).toHaveLength(1);
        expect(onChange).not.toHaveBeenCalled();

        // Should add to selected items on clicking another item
        fireEvent.click(screen.getByText('Item 2'));
        selectedItems = screen.getAllByRole('option', {
            checked: true,
        });
        expect(selectedItems).toHaveLength(2);
        expect(onChange).not.toHaveBeenCalled();

        // Should not call onChange on clicking outside
        fireEvent.mouseDown(document);
        expect(onChange).not.toHaveBeenCalled();

        // Should Clear All Selected Items
        fireEvent.click(screen.getByText('Clear All'));
        selectedItems = screen.queryAllByRole('option', {
            checked: true,
        });
        expect(selectedItems).toHaveLength(0);

        // Should add to selected items on clicking multiple item
        fireEvent.click(screen.getByText('Item 1'));
        fireEvent.click(screen.getByText('Item 2'));
        selectedItems = screen.getAllByRole('option', {
            checked: true,
        });
        expect(selectedItems).toHaveLength(2);

        // Should call onChange on clicking Apply
        fireEvent.click(screen.getByText('Apply'));
        selectedItems = screen.getAllByRole('option', {
            checked: true,
        });
        expect(selectedItems).toHaveLength(2);
        expect(onChange).toHaveBeenCalledWith([items[1], items[2]]);
    });

    // Multiple Select Mode Flow with applyOnOptionSelectInMultipleMode
    it('Should call onChange immediately when in multiple select mode, if applyOnOptionSelectInMultipleMode is true', () => {
        const onChange = jest.fn();
        const items = getDummyOptions(3);

        render(
            <DropdownMenu
                {...defaultProps}
                items={items}
                onChange={onChange}
                multiple
                applyOnOptionSelectInMultipleMode
            />
        );

        // Should call onChange immediately on clicking an item
        fireEvent.click(screen.getByText('Item 1'));
        let selectedItems = screen.getAllByRole('option', {
            checked: true,
        });
        expect(selectedItems).toHaveLength(1);
        expect(onChange).toHaveBeenCalledWith([items[1]]);

        // Should add to selected items on clicking another item
        fireEvent.click(screen.getByText('Item 2'));
        selectedItems = screen.getAllByRole('option', {
            checked: true,
        });
        expect(selectedItems).toHaveLength(2);
        expect(onChange).toHaveBeenCalledWith([items[1], items[2]]);
    });

    // Accessibility
    it('Should navigate through items using keyboard', () => {
        const items = getDummyOptions(3);
        render(<DropdownMenu {...defaultProps} items={items} />);

        // Should go to next item on pressing down arrow key
        const options = screen.getAllByRole('option');
        fireEvent.keyDown(options[0], { key: 'ArrowDown' });
        expect(options[1]).toHaveFocus();

        // Should go to previous item on pressing up arrow key
        fireEvent.keyDown(options[1], { key: 'ArrowUp' });
        expect(options[0]).toHaveFocus();

        // Should select the item on pressing enter key
        fireEvent.keyDown(options[0], { key: 'Enter' });
        expect(options[0]).toHaveAttribute('aria-selected', 'true');
        fireEvent.keyDown(options[1], { key: 'Enter' });
        expect(options[0]).toHaveAttribute('aria-selected', 'false');
        expect(options[1]).toHaveAttribute('aria-selected', 'true');
    });

    // ScrollToOnOpen Functionality
    describe('ScrollToOnOpen Functionality', () => {
        let mockScrollIntoView: jest.Mock;

        beforeEach(() => {
            mockScrollIntoView = jest.fn();
            Element.prototype.scrollIntoView = mockScrollIntoView;
        });

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('Should scroll to the first item with scrollToOnOpen: true when dropdown renders', async () => {
            const items = [
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'Item 0',
                    value: 'item-0',
                },
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'Item 1',
                    value: 'item-1',
                    scrollToOnOpen: true,
                },
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'Item 2',
                    value: 'item-2',
                },
            ];

            render(<DropdownMenu {...defaultProps} items={items} />);

            // Wait for the scroll timeout
            await new Promise(resolve => setTimeout(resolve, 150));

            expect(mockScrollIntoView).toHaveBeenCalledWith({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        });

        it('Should scroll to the first item with scrollToOnOpen: true, not the second one', async () => {
            const items = [
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'Item 0',
                    value: 'item-0',
                },
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'Item 1',
                    value: 'item-1',
                    scrollToOnOpen: true,
                },
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'Item 2',
                    value: 'item-2',
                    scrollToOnOpen: true, // This should be ignored
                },
            ];

            render(<DropdownMenu {...defaultProps} items={items} />);

            // Wait for the scroll timeout
            await new Promise(resolve => setTimeout(resolve, 150));

            // Should only be called once for the first marked item
            expect(mockScrollIntoView).toHaveBeenCalledTimes(1);
        });

        it('Should work with sub-headers that have scrollToOnOpen: true', async () => {
            const items = [
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'Item 0',
                    value: 'item-0',
                },
                {
                    type: BaseItemType.SUB_HEADER as BaseItemType.SUB_HEADER,
                    title: 'Important Section',
                    scrollToOnOpen: true,
                },
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'Item 1',
                    value: 'item-1',
                },
            ];

            render(<DropdownMenu {...defaultProps} items={items} />);

            // Wait for the scroll timeout
            await new Promise(resolve => setTimeout(resolve, 150));

            expect(mockScrollIntoView).toHaveBeenCalledWith({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        });

        it('Should not scroll if no items have scrollToOnOpen: true', async () => {
            const items = getDummyOptions(3);

            render(<DropdownMenu {...defaultProps} items={items} />);

            // Wait for the scroll timeout
            await new Promise(resolve => setTimeout(resolve, 150));

            expect(mockScrollIntoView).not.toHaveBeenCalled();
        });

        it('Should scroll to marked item in search results', async () => {
            const items = [
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'Apple',
                    value: 'apple',
                },
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'Banana',
                    value: 'banana',
                    scrollToOnOpen: true,
                },
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'Cherry',
                    value: 'cherry',
                },
            ];

            render(<DropdownMenu {...defaultProps} items={items} searchable />);

            // Search for items containing 'a'
            fireEvent.change(screen.getByRole('textbox'), {
                target: { value: 'a' },
            });

            // Wait for debounced search and scroll timeout
            await new Promise(resolve => setTimeout(resolve, 650));

            // Should scroll to the Banana item which has scrollToOnOpen: true and matches search
            expect(mockScrollIntoView).toHaveBeenCalledWith({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        });

        it('Should re-trigger scroll when items change', async () => {
            const { rerender } = render(<DropdownMenu {...defaultProps} items={getDummyOptions(3)} />);

            // Wait for initial render
            await new Promise(resolve => setTimeout(resolve, 150));

            // Should not scroll initially
            expect(mockScrollIntoView).not.toHaveBeenCalled();

            // Update items with scrollToOnOpen
            const newItems = [
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'New Item 0',
                    value: 'new-item-0',
                },
                {
                    type: BaseItemType.OPTION as BaseItemType.OPTION,
                    label: 'New Item 1',
                    value: 'new-item-1',
                    scrollToOnOpen: true,
                },
            ];

            rerender(<DropdownMenu {...defaultProps} items={newItems} />);

            // Wait for the scroll timeout
            await new Promise(resolve => setTimeout(resolve, 150));

            expect(mockScrollIntoView).toHaveBeenCalledWith({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        });
    });
});
