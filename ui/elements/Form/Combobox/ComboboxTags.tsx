import React from 'react';

import { BaseItemOptionProps } from '../../DropdownMenu';
import Tag, { TagProps } from '../../Tag';

export const ComboboxTags = ({
    selectedItems,
    onItemDismissClick,
    isDisabled,
    tagProps = {},
    renderValue,
}: {
    selectedItems: BaseItemOptionProps[] | BaseItemOptionProps;
    isDisabled?: boolean;
    onItemDismissClick?: (item: BaseItemOptionProps) => void;
    tagProps?: Omit<TagProps, 'children'>;
    renderValue?: ({
        index,
        item,
        onDismiss,
    }: {
        index: number;
        item: BaseItemOptionProps;
        onDismiss: () => void;
    }) => React.ReactNode;
}) => {
    let selectedItemsList: BaseItemOptionProps[] = [];
    if (Array.isArray(selectedItems)) {
        selectedItemsList = selectedItems;
    } else if (selectedItems) {
        selectedItemsList = [selectedItems];
    }

    return (
        <>
            {renderValue &&
                selectedItemsList.map((item: BaseItemOptionProps, index: number) => (
                    <React.Fragment key={item.value}>
                        {renderValue({
                            index,
                            item,
                            onDismiss: () => {
                                onItemDismissClick(item);
                            },
                        })}
                    </React.Fragment>
                ))}
            {!renderValue &&
                selectedItemsList.map((item: BaseItemOptionProps) => (
                    <Tag
                        {...tagProps}
                        onButtonClick={(
                            e: React.MouseEvent<HTMLButtonElement>
                        ) => {
                            e.stopPropagation();
                            onItemDismissClick(item);
                        }}
                        isDisabled={isDisabled}
                        key={item.value}
                    >
                        {item.label}
                    </Tag>
                ))}
        </>
    );
};
