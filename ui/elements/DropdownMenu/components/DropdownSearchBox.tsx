import React, { useEffect, useState } from 'react';
import { grauityIconName } from 'ui/core';

import TextField from '../../Form/TextField';
import { Icon } from '../../Icon';
import { StyledDropdownMenuSearchBox } from '../DropdownMenu.styles';

interface DropdownSearchBoxProps {
    searchable: boolean;
    searchPlaceholder: string;
    searchIcon: grauityIconName;
    onSearchInputChange: (value: string) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    searchRef: React.RefObject<HTMLInputElement>;
}

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

    const handleContainerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (['ArrowUp', 'ArrowDown', 'Enter', 'Escape', 'Tab'].includes(event.key)) {
            onKeyDown(event as unknown as React.KeyboardEvent<HTMLInputElement>);
        }
    };

    return (
        <StyledDropdownMenuSearchBox role="searchbox" onKeyDown={handleContainerKeyDown}>
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