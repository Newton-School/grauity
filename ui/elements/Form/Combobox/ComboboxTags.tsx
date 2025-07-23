import React from 'react';
import { BaseItemOptionProps } from 'ui/elements/DropdownMenu';
import Tag from 'ui/elements/Tag';

export const ComboboxTags = ({
    selectedItems,
    onItemDismissClick,
    isDisabled,
}: {
    selectedItems: BaseItemOptionProps[] | BaseItemOptionProps;
    isDisabled?: boolean;
    onItemDismissClick?: (item: BaseItemOptionProps) => void;
}) => {
    let selectedItemsList: BaseItemOptionProps[] = [];
    if (Array.isArray(selectedItems)) {
        selectedItemsList = selectedItems;
    } else if (selectedItems) {
        selectedItemsList = [selectedItems];
    }

    return (
        <>
            {selectedItemsList.map((item: BaseItemOptionProps) => (
                <Tag
                    onButtonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
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
