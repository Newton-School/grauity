import React, { useEffect, useState } from 'react';

import TextField from '../../Form/TextField';
import { Icon } from '../../Icon';
import { StyledDropdownMenuSearchBox } from '../DropdownMenu.styles';
import { DropdownSearchBoxProps } from '../types';

const DropdownSearchBox = ({
    searchable,
    searchPlaceholder,
    searchIcon,
    onSearchInputChange,
    onKeyDown,
    searchRef,
}: DropdownSearchBoxProps) => {
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        onSearchInputChange(searchValue);
    }, [searchValue]);

    if (!searchable) {
        return null;
    }

    // Handle only navigation keys at the container level
    const handleContainerKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (
            ['ArrowUp', 'ArrowDown', 'Enter', 'Escape', 'Tab'].includes(
                event.key
            )
        ) {
            onKeyDown(event);
        }
    };

    return (
        <StyledDropdownMenuSearchBox
            role="searchbox"
            onKeyDown={handleContainerKeyDown}
        >
            <TextField
                ref={searchRef}
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
