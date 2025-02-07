import debounce from 'lodash/debounce';
import React, { useCallback, useEffect, useState } from 'react';
import { grauityIconName } from 'ui/core';
import TextField from 'ui/elements/Form/TextField';
import { Icon } from 'ui/elements/Icon';

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

    const handleSearchInputChange = useCallback(
        debounce((value) => onSearchInputChange(value), 500),
        []
    );

    useEffect(() => {
        handleSearchInputChange(searchValue);
    }, [searchValue]);

    if (!searchable) {
        return null;
    }

    return (
        <StyledDropdownMenuSearchBox>
            <TextField
                name="dropdown-search-box"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder={searchPlaceholder}
                adornments={{
                    start: <Icon name={searchIcon} />,
                }}
            />
        </StyledDropdownMenuSearchBox>
    );
};

export default DropdownSearchBox;
