/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { debounce } from 'lodash';
import React, {
    forwardRef,
    RefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import { useClickAway } from '../../../hooks';
import DropdownMenuFooter from './components/DropdownMenuFooter';
import DropdownMenuHeader from './components/DropdownMenuHeader';
import DropdownMenuOption from './components/DropdownMenuOption';
import DropdownMenuSubHeader from './components/DropdownMenuSubHeader';
import DropdownSearchBox from './components/DropdownSearchBox';
import { FRAMER_MOTION_PROPS } from './constants';
import {
    StyledDropdownMenu,
    StyledDropdownMenuBody,
    StyledDropdownMenuDivider,
} from './DropdownMenu.styles';
import {
    BaseItemOptionProps,
    BaseItemType,
    DropdownMenuProps,
    OptionValue,
} from './types';
import { defaultSearchMethod, getOptionsFromBaseDropdownItems } from './utils';

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
    (props, ref) => {
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
            onChange = () => {},
            onScrollToBottom = () => {},
            className = null,
            styles = {},
            selectedValues = [],
            width = '300px',
        } = props;

        const [options, setOptions] = useState<BaseItemOptionProps[]>([]);
        const [selectedOptions, setSelectedOptions] = useState<OptionValue[]>(
            []
        );
        const [searchedOptions, setSearchedOptions] = useState<
            BaseItemOptionProps[] | null
        >(null);

        const dropdownMenuRef = useRef<HTMLDivElement>(null);
        const dropdownRef = ref || dropdownMenuRef;
        const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

        const handleClearAll = () => {
            setSelectedOptions([]);
            onClearAll();
        };

        const handleApply = (customValues: BaseItemOptionProps[] = null) => {
            if (Array.isArray(customValues)) {
                onChange(customValues);
            } else {
                onChange(
                    options.filter((option) =>
                        selectedOptions.includes(option.value)
                    )
                );
            }
        };

        const handleClickOption = (value: OptionValue) => {
            if (multiple) {
                const newSelectedOptions = selectedOptions.includes(value)
                    ? selectedOptions.filter((option) => option !== value)
                    : [...selectedOptions, value];
                setSelectedOptions(newSelectedOptions);
            } else {
                setSelectedOptions([value]);
                if (!showActionButtons) {
                    handleApply(
                        options.filter((option) => option.value === value)
                    );
                }
            }
        };

        const handleMenuBodyScroll = (e: React.UIEvent<HTMLDivElement>) => {
            const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
            if (Math.abs(scrollHeight - scrollTop - clientHeight) < 50) {
                onScrollToBottom();
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

        const handleKeyDown = (
            event: React.KeyboardEvent<HTMLButtonElement>,
            index: number
        ) => {
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    const nextIndex = (index + 1) % options.length;
                    optionRefs.current[nextIndex]?.focus();
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    const prevIndex =
                        (index - 1 + options.length) % options.length;
                    optionRefs.current[prevIndex]?.focus();
                    break;
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    handleClickOption(options[index].value);
                    break;
                default:
                    break;
            }
        };

        useEffect(() => {
            const filteredOptions = getOptionsFromBaseDropdownItems(items);
            setOptions(filteredOptions);
        }, [items]);

        useEffect(() => {
            setSelectedOptions(selectedValues);
        }, [selectedValues]);

        useClickAway(dropdownRef as RefObject<HTMLElement>, () => {
            if (multiple && !showActionButtons) {
                handleApply();
            }
        });

        return (
            <StyledDropdownMenu
                className={className}
                style={styles}
                ref={dropdownRef}
                $width={width}
                role="menu"
                {...FRAMER_MOTION_PROPS}
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
                        searchedOptions.map((item, index) => (
                            <DropdownMenuOption
                                optionRef={(el) => {
                                    optionRefs.current[index] = el;
                                }}
                                multiple={multiple}
                                selected={selectedOptions.includes(item.value)}
                                onClick={handleClickOption}
                                onKeyDown={(event) =>
                                    handleKeyDown(event, index)
                                }
                                {...item}
                            />
                        ))}
                    {!Array.isArray(searchedOptions) &&
                        items.map((item, index) => {
                            if (item.type === BaseItemType.SUB_HEADER) {
                                return (
                                    <DropdownMenuSubHeader
                                        key={`${item.type}-${item.title}`}
                                        {...item}
                                    />
                                );
                            }
                            if (item.type === BaseItemType.DIVIDER) {
                                return (
                                    <StyledDropdownMenuDivider
                                        key={`${item.type}`}
                                    />
                                );
                            }
                            if (item.type === BaseItemType.OPTION) {
                                return (
                                    <DropdownMenuOption
                                        optionRef={(el) => {
                                            optionRefs.current[index] = el;
                                        }}
                                        key={`${item.type}-${item.value}`}
                                        multiple={multiple}
                                        selected={selectedOptions.includes(
                                            item.value
                                        )}
                                        onClick={handleClickOption}
                                        onKeyDown={(event) =>
                                            handleKeyDown(event, index)
                                        }
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
                    handleClearAll={handleClearAll}
                    handleApply={handleApply}
                />
            </StyledDropdownMenu>
        );
    }
);

export default DropdownMenu;
