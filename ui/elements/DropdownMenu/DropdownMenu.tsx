import React, { useEffect, useState } from 'react';

import DropdownMenuHeader from './components/DropdownMenuHeader';
import { StyledDropdownMenu } from './DropdownMenu.styles';
import { BaseItemOptionProps, DropdownMenuProps } from './types';
import { getOptionsFromBaseDropdownItems } from './utils';

const DropdownMenu = (props: DropdownMenuProps) => {
    const {
        showHeader = true,
        title = 'Select',
        overline = '',
        subtext = '',
        customHeader = null,
        searchable = false,
        searchPlaceholder = 'Search',
        searchIcon = 'search',
        onSearchInputChange = () => {},
        multiple = false,
        items = [],
        showActionButtons = false,
        showClearAllButton = true,
        clearAllButtonText = 'Clear All',
        applyButtonText = 'Apply',
        onClearAll = () => {},
        onApply = () => {},
        onScrollToBottom = () => {},
        className = null,
        styles = {},
    } = props;

    const [options, setOptions] = useState<BaseItemOptionProps[]>([]);

    useEffect(() => {
        const filteredOptions = getOptionsFromBaseDropdownItems(items);
        setOptions(filteredOptions);
    }, [items]);

    return (
        <StyledDropdownMenu className={className} style={styles}>
            <DropdownMenuHeader
                showHeader={showHeader}
                overline={overline}
                title={title}
                subtext={subtext}
                customHeader={customHeader}
            />
        </StyledDropdownMenu>
    );
};

export default DropdownMenu;
