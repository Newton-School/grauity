import React from 'react';

import { BaseItemOptionProps } from '../../DropdownMenu';
import Tag, { TagProps } from '../../Tag';

export const ComboboxTags = ({
    selectedItems,
    onItemDismissClick,
    isDisabled,
    tagProps = {},
}: {
    selectedItems: BaseItemOptionProps[] | BaseItemOptionProps;
    isDisabled?: boolean;
    onItemDismissClick?: (item: BaseItemOptionProps) => void;
    tagProps?: Omit<TagProps, 'children'>;
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
                    {...tagProps}
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
