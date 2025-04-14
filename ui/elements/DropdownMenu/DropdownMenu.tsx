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

import { handleKeyboardInteractionInListViews } from '../../../common/utils';
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
    BaseItemProps,
    BaseItemType,
    DropdownMenuProps,
} from './types';
import {
    defaultSearchMethod,
    getOptionsFromBaseDropdownItems,
    getSelectedValuesForDropdownType,
    isDropdownMenuItemNavigable,
} from './utils';

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
            value = null,
            width = '300px',
        } = props;

        const selectedValues = getSelectedValuesForDropdownType(
            multiple,
            value
        );

        const [options, setOptions] = useState<BaseItemOptionProps[]>([]);
        const [selectedOptions, setSelectedOptions] =
            useState<BaseItemOptionProps[]>(selectedValues);
        const [searchedOptions, setSearchedOptions] = useState<
            BaseItemOptionProps[] | null
        >(null);

        const dropdownMenuRef = useRef<HTMLDivElement>(null);
        const dropdownRef = ref || dropdownMenuRef;
        const searchRef = useRef<HTMLInputElement>(null);
        const itemRefs = useRef<(HTMLDivElement | HTMLButtonElement | null)[]>(
            []
        );
        const searchedItemRefs = useRef<
            (HTMLDivElement | HTMLButtonElement | null)[]
        >([]);

        const handleClearAll = () => {
            setSelectedOptions([]);
            onClearAll();
        };

        const handleApply = (customValues: BaseItemOptionProps[] = null) => {
            let finalValues: BaseItemOptionProps[] = [];
            if (Array.isArray(customValues)) {
                finalValues = customValues;
            } else {
                finalValues = options.filter((option) =>
                    selectedOptions.find(
                        (selectedOption) =>
                            selectedOption.value === option.value
                    )
                );
            }

            if (multiple) {
                onChange(finalValues);
            } else if (finalValues.length > 0) {
                onChange(finalValues[0]);
            }
        };

        const handleClickOption = (clickedValue: BaseItemOptionProps) => {
            if (multiple) {
                const newSelectedOptions =
                    selectedOptions.findIndex(
                        (option) => option.value === clickedValue.value
                    ) !== -1
                        ? selectedOptions.filter(
                              (option) => option.value !== clickedValue.value
                          )
                        : [...selectedOptions, clickedValue];
                setSelectedOptions(newSelectedOptions);
            } else {
                setSelectedOptions([clickedValue]);
                if (!showActionButtons) {
                    handleApply(
                        options.filter(
                            (option) => option.value === clickedValue.value
                        )
                    );
                }
            }
        };

        const handleMenuBodyScroll = (e: React.UIEvent<HTMLDivElement>) => {
            const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
            if (Math.abs(scrollHeight - scrollTop - clientHeight) < 1) {
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
            debounce(
                (searchValue) => handleSearchInputChange(searchValue),
                500
            ),
            [options]
        );

        const focusOnGivenIndex = (
            index: number,
            itemList: BaseItemProps[] = [],
            refsList: React.MutableRefObject<
                (HTMLDivElement | HTMLButtonElement)[]
            >
        ) => {
            if (index <= -1 || index >= itemList.length) {
                if (searchable) {
                    searchRef.current?.focus();
                } else {
                    itemRefs.current[0]?.focus();
                }
            } else {
                refsList.current[index]?.focus();
            }
        };

        const handleKeyDown = (
            event: React.KeyboardEvent<any>,
            index: number,
            itemList: BaseItemProps[] = [],
            refsList: React.MutableRefObject<
                (HTMLDivElement | HTMLButtonElement)[]
            >
        ) => {
            handleKeyboardInteractionInListViews(
                event,
                () => {
                    let nextIndex = index + 1;
                    while (
                        nextIndex < itemList.length &&
                        !isDropdownMenuItemNavigable(itemList[nextIndex])
                    ) {
                        nextIndex += 1;
                    }
                    focusOnGivenIndex(nextIndex, itemList, refsList);
                },
                () => {
                    let prevIndex = index - 1;
                    while (
                        prevIndex >= 0 &&
                        !isDropdownMenuItemNavigable(itemList[prevIndex])
                    ) {
                        prevIndex -= 1;
                    }
                    focusOnGivenIndex(prevIndex, itemList, refsList);
                },
                () => {
                    const item = itemList[index];
                    if (item.type === BaseItemType.OPTION && !item.disabled) {
                        handleClickOption(item);
                    }
                },
                handleApply
            );
        };

        useEffect(() => {
            const filteredOptions = getOptionsFromBaseDropdownItems(items);
            setOptions(filteredOptions);
        }, [items]);

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
                        searchRef={searchRef}
                        searchable={searchable}
                        searchPlaceholder={searchPlaceholder}
                        searchIcon={searchIcon}
                        onSearchInputChange={handleDebouncedSearchInputChange}
                        onKeyDown={(event) =>
                            handleKeyDown(
                                event,
                                -1,
                                searchedOptions || options,
                                searchedOptions ? searchedItemRefs : itemRefs
                            )
                        }
                    />
                    {Array.isArray(searchedOptions) &&
                        searchedOptions.map((item, index) => (
                            <DropdownMenuOption
                                optionRef={(el) => {
                                    searchedItemRefs.current[index] = el;
                                }}
                                multiple={multiple}
                                selected={selectedOptions
                                    .map((option) => option.value)
                                    .includes(item.value)}
                                onClick={(clickedValue) =>
                                    handleClickOption(
                                        options.find(
                                            (option) =>
                                                option.value === clickedValue
                                        )
                                    )
                                }
                                onKeyDown={(event) =>
                                    handleKeyDown(
                                        event,
                                        index,
                                        searchedOptions,
                                        searchedItemRefs
                                    )
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
                                        itemRef={(el) => {
                                            itemRefs.current[index] = el;
                                        }}
                                        onKeyDown={(event) =>
                                            handleKeyDown(
                                                event,
                                                index,
                                                items,
                                                itemRefs
                                            )
                                        }
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
                                        key={`${item.type}-${item.value}`}
                                        optionRef={(el) => {
                                            itemRefs.current[index] = el;
                                        }}
                                        multiple={multiple}
                                        selected={selectedOptions
                                            .map((option) => option.value)
                                            .includes(item.value)}
                                        onClick={(clickedValue) =>
                                            handleClickOption(
                                                options.find(
                                                    (option) =>
                                                        option.value ===
                                                        clickedValue
                                                )
                                            )
                                        }
                                        onKeyDown={(event) =>
                                            handleKeyDown(
                                                event,
                                                index,
                                                items,
                                                itemRefs
                                            )
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
