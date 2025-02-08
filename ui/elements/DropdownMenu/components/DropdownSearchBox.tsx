import React, { useEffect, useState } from 'react';
import { grauityIconName } from 'ui/core';
import { NSIcon, NSTextField } from 'ui/index';

import { StyledDropdownMenuSearchBox } from '../DropdownMenu.styles';

interface DropdownSearchBoxProps {
    searchable: boolean;
    searchPlaceholder: string;
    searchIcon: grauityIconName;
    onSearchInputChange: (value: string) => void;
}

const DropdownSearchBox = ({
    searchable,
    searchPlaceholder,
    searchIcon,
    onSearchInputChange,
}: DropdownSearchBoxProps) => {
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        onSearchInputChange(searchValue);
    }, [searchValue]);

    if (!searchable) {
        return null;
    }

    return (
        <StyledDropdownMenuSearchBox role="searchbox">
            <NSTextField
                name="dropdown-search-box"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder={searchPlaceholder}
                adornments={{
                    start: <NSIcon name={searchIcon} />,
                }}
            />
        </StyledDropdownMenuSearchBox>
    );
};

export default DropdownSearchBox;
