import { debounce } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useClickAway } from '../../../hooks';
import DropdownMenuFooter from './components/DropdownMenuFooter';
import DropdownMenuHeader from './components/DropdownMenuHeader';
import DropdownMenuOption from './components/DropdownMenuOption';
import DropdownMenuSubHeader from './components/DropdownMenuSubHeader';
import DropdownSearchBox from './components/DropdownSearchBox';
import {
    StyledDropdownMenu,
    StyledDropdownMenuBody,
    StyledDropdownMenuDivider,
} from './DropdownMenu.styles';
import { BaseItemOptionProps, BaseItemType, DropdownMenuProps } from './types';
import { defaultSearchMethod, getOptionsFromBaseDropdownItems } from './utils';

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
        onSearchInputChange = null,
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
        selectedValues = [],
    } = props;

    const dropdownMenuRef = useRef(null);

    const [options, setOptions] = useState<BaseItemOptionProps[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<(string | number)[]>(
        []
    );
    const [searchedOptions, setSearchedOptions] = useState<
        BaseItemOptionProps[] | null
    >(null);

    const handleClearAll = () => {
        setSelectedOptions([]);
        onClearAll();
    };

    const handleApply = () => {
        if (multiple) {
            onApply(
                options.filter((option) =>
                    selectedOptions.includes(option.value)
                )
            );
        } else {
            onApply(
                options.find((option) => selectedOptions.includes(option.value))
            );
        }
    };

    const handleMenuBodyScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollHeight - scrollTop === clientHeight) {
            onScrollToBottom();
        }
    };

    const handleClickOption = (value: string | number) => {
        if (multiple) {
            const newSelectedOptions = selectedOptions.includes(value)
                ? selectedOptions.filter((option) => option !== value)
                : [...selectedOptions, value];
            setSelectedOptions(newSelectedOptions);
        } else {
            setSelectedOptions([value]);
            if (!showActionButtons) {
                onApply(options.find((option) => option.value === value));
            }
        }
    };

    const handleSearchInputChange = (searchValue: string) => {
        if (searchable) {
            if (typeof onSearchInputChange === 'function') {
                onSearchInputChange(searchValue);
            } else {
                const filteredOptions = defaultSearchMethod(
                    searchValue,
                    options
                );
                if (filteredOptions.length > 0 || searchValue) {
                    setSearchedOptions(filteredOptions);
                } else {
                    setSearchedOptions(null);
                }
            }
        }
    };

    const handleDebouncedSearchInputChange = useCallback(
        debounce((value) => handleSearchInputChange(value), 500),
        [options]
    );

    useEffect(() => {
        const filteredOptions = getOptionsFromBaseDropdownItems(items);
        setOptions(filteredOptions);
    }, [items]);

    useEffect(() => {
        if (multiple) {
            setSelectedOptions(selectedValues);
        } else {
            setSelectedOptions(selectedValues.slice(0, 1));
        }
    }, [selectedValues]);

    useClickAway(dropdownMenuRef, () => {
        if (multiple && !showActionButtons) {
            handleApply();
        }
    });

    return (
        <StyledDropdownMenu
            className={className}
            style={styles}
            ref={dropdownMenuRef}
        >
            <DropdownMenuHeader
                showHeader={showHeader}
                overline={overline}
                title={title}
                subtext={subtext}
                customHeader={customHeader}
            />
            <StyledDropdownMenuBody onScroll={handleMenuBodyScroll}>
                <DropdownSearchBox
                    searchable={searchable}
                    searchPlaceholder={searchPlaceholder}
                    searchIcon={searchIcon}
                    onSearchInputChange={handleDebouncedSearchInputChange}
                />
                {Array.isArray(searchedOptions) &&
                    searchedOptions.map((item) => (
                        <DropdownMenuOption
                            multiple={multiple}
                            selected={selectedOptions.includes(item.value)}
                            onClick={handleClickOption}
                            {...item}
                        />
                    ))}
                {!Array.isArray(searchedOptions) &&
                    items.map((item) => {
                        if (item.type === BaseItemType.SUB_HEADER) {
                            return <DropdownMenuSubHeader {...item} />;
                        }
                        if (item.type === BaseItemType.DIVIDER) {
                            return <StyledDropdownMenuDivider />;
                        }
                        if (item.type === BaseItemType.OPTION) {
                            return (
                                <DropdownMenuOption
                                    multiple={multiple}
                                    selected={selectedOptions.includes(
                                        item.value
                                    )}
                                    onClick={handleClickOption}
                                    {...item}
                                />
                            );
                        }
                        return null;
                    })}
            </StyledDropdownMenuBody>
            <DropdownMenuFooter
                multiple={multiple}
                showActionButtons={showActionButtons}
                showClearAllButton={showClearAllButton}
                clearAllButtonText={clearAllButtonText}
                applyButtonText={applyButtonText}
                onClearAll={handleClearAll}
                onApply={handleApply}
            />
        </StyledDropdownMenu>
    );
};

export default DropdownMenu;
